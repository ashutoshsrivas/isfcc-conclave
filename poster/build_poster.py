#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""3rd ISFCC — social media poster (Diplomatic Horizon)."""
from PIL import Image, ImageDraw, ImageFont
import os, random

FONTS = "/sessions/zealous-practical-cannon/mnt/.claude/skills/canvas-design/canvas-fonts"
LOGO  = "/sessions/zealous-practical-cannon/mnt/conclave/logo"
OUT   = "/sessions/zealous-practical-cannon/mnt/conclave/poster"
os.makedirs(OUT, exist_ok=True)

S = 2
W, H = 1080*S, 1350*S

NAVY   = (26, 24, 74)
RED    = (200, 16, 46)
GOLD   = (201, 162, 39)
SKY    = (60, 165, 220)
OWHITE = (245, 245, 240)
MUTE   = (176, 180, 210)
DIM    = (120, 124, 160)

def f(name, size): return ImageFont.truetype(os.path.join(FONTS, name), int(size*S))

DISP_B  = "BigShoulders-Bold.ttf"
SERIF_I = "CrimsonPro-Italic.ttf"
MONO    = "IBMPlexMono-Regular.ttf"
SANS_B  = "Outfit-Bold.ttf"
SANS_R  = "Outfit-Regular.ttf"

img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

# gradient background
top = (30, 27, 84); bot = (9, 8, 34)
for y in range(H):
    t = (y/H)**1.15
    d.line([(0, y), (W, y)],
           fill=(int(top[0]*(1-t)+bot[0]*t), int(top[1]*(1-t)+bot[1]*t), int(top[2]*(1-t)+bot[2]*t)))

MARGIN = 110*S
CX = W//2

def tw(text, font, tr=0):
    if tr == 0: return d.textlength(text, font=font)
    return sum(d.textlength(c, font=font)+tr for c in text) - tr

def T(y, text, font, fill, tr=0, cx=CX, x=None):
    if tr == 0:
        w = d.textlength(text, font=font)
        xx = (cx - w/2) if x is None else x
        d.text((xx, y), text, font=font, fill=fill); return
    total = tw(text, font, tr)
    xx = (cx - total/2) if x is None else x
    for c in text:
        d.text((xx, y), c, font=font, fill=fill)
        xx += d.textlength(c, font=font) + tr

# ===== HEADER: co-branded logos =====
geu  = Image.open(os.path.join(LOGO, "1.png")).convert("RGBA")
gcci = Image.open(os.path.join(LOGO, "2.png")).convert("RGBA")

chip_y = 68*S; chip_h = 138*S
lchip_w = 512*S
d.rounded_rectangle([MARGIN, chip_y, MARGIN+lchip_w, chip_y+chip_h], radius=22*S, fill=OWHITE)
pad = 26*S; aw = lchip_w-2*pad; ah = chip_h-2*pad
gr = min(aw/geu.width, ah/geu.height)
gw, gh = int(geu.width*gr), int(geu.height*gr)
img.paste(geu.resize((gw, gh), Image.LANCZOS),
          (int(MARGIN+pad+(aw-gw)/2), int(chip_y+pad+(ah-gh)/2)), geu.resize((gw, gh), Image.LANCZOS))

rd = chip_h
d.ellipse([W-MARGIN-rd, chip_y, W-MARGIN, chip_y+rd], fill=OWHITE)
gp = 12*S; gav = rd-2*gp
gcr = min(gav/gcci.width, gav/gcci.height)
gcw, gch = int(gcci.width*gcr), int(gcci.height*gcr)
img.paste(gcci.resize((gcw, gch), Image.LANCZOS),
          (int(W-MARGIN-rd+gp+(gav-gcw)/2), int(chip_y+gp+(gav-gch)/2)), gcci.resize((gcw, gch), Image.LANCZOS))
d = ImageDraw.Draw(img)

lab = f(MONO, 10.5)
T(chip_y+chip_h+14*S, "HOST · KNOWLEDGE & VENUE PARTNER", lab, MUTE, tr=1*S, cx=MARGIN+lchip_w/2)
T(chip_y+chip_h+14*S, "ORGANISER", lab, MUTE, tr=2*S, cx=W-MARGIN-rd/2)

hair_y = chip_y+chip_h+52*S
d.line([(MARGIN, hair_y), (W-MARGIN, hair_y)], fill=GOLD, width=1*S)

# ===== EYEBROW =====
T(hair_y+26*S, "3RD  INTERNATIONAL  EDITION", f(MONO, 15), GOLD, tr=7*S)

# ===== MONUMENTAL TITLE =====
tf = f(DISP_B, 112)
y1 = hair_y+62*S
T(y1, "SMART & FUTURE", tf, OWHITE, tr=2*S)
y2 = y1 + 108*S
# two-color centered line
line_a, line_b = "CITIES ", "CONCLAVE"
total2 = tw(line_a, tf, 2*S) + tw(line_b, tf, 2*S) + 2*S
xx = CX - total2/2
for c in line_a:
    d.text((xx, y2), c, font=tf, fill=RED); xx += d.textlength(c, font=tf)+2*S
for c in line_b:
    d.text((xx, y2), c, font=tf, fill=OWHITE); xx += d.textlength(c, font=tf)+2*S

# ===== THEME =====
th_y = y2 + 132*S
T(th_y, "Intelligent Urban Futures", f(SERIF_I, 44), GOLD)
T(th_y+58*S, "TECHNOLOGY   ·   SUSTAINABILITY   ·   GOVERNANCE", f(MONO, 15), MUTE, tr=3*S)

# ===== SKYLINE (lower third) =====
base_y = int(H*0.585)
random.seed(21)
sil = Image.new("RGBA", (W, H), (0,0,0,0))
sd = ImageDraw.Draw(sil)
x = -20*S
towers = []
while x < W+40*S:
    bw = random.randint(38, 72)*S
    bh = random.randint(52, 150)*S
    towers.append((x, bw, bh)); x += bw + random.randint(6, 16)*S
for (tx, bw, bh) in towers:
    ty = base_y - bh
    sd.rectangle([tx, ty, tx+bw, base_y], fill=(18, 17, 52, 245))
    for wy in range(int(ty)+14*S, int(base_y)-8*S, 24*S):
        for wx in range(int(tx)+9*S, int(tx+bw)-9*S, 20*S):
            if random.random() < 0.26:
                col = GOLD if random.random() < 0.5 else SKY
                sd.rectangle([wx, wy, wx+6*S, wy+8*S], fill=col+(170,))
img.paste(sil, (0, 0), sil); d = ImageDraw.Draw(img)

# connectivity arcs/dots above skyline
random.seed(7)
nodes = []
band = base_y - 150*S
for i in range(11):
    nx = MARGIN + i*(W-2*MARGIN)/10
    ny = band + random.randint(0, 34*S)
    nodes.append((nx, ny))
for i in range(len(nodes)-1):
    d.line([nodes[i], nodes[i+1]], fill=(52, 78, 140), width=1*S)
for (nx, ny) in nodes:
    d.ellipse([nx-4*S, ny-4*S, nx+4*S, ny+4*S], fill=SKY)
d.line([(0, base_y), (W, base_y)], fill=(40, 55, 110), width=2*S)

# ===== TAGLINE PILL =====
tag_y = base_y + 30*S
tagf = f(DISP_B, 33)
tagt = "EVOLVING UTTARAKHAND — RISING INDIA"
tagw = tw(tagt, tagf, 3*S)
ph = 60*S
d.rounded_rectangle([CX-tagw/2-38*S, tag_y, CX+tagw/2+38*S, tag_y+ph], radius=ph//2, outline=GOLD, width=2*S)
T(tag_y+15*S, tagt, tagf, GOLD, tr=3*S)

# ===== DETAILS: DATE / VENUE =====
det_y = tag_y + ph + 36*S
colL, colR = W*0.30, W*0.70
d.line([(CX, det_y-2*S), (CX, det_y+92*S)], fill=(70, 80, 140), width=1*S)
labf = f(MONO, 14); valf = f(SANS_B, 29); subf = f(SANS_R, 19)
T(det_y, "DATE", labf, SKY, tr=4*S, cx=colL)
T(det_y+28*S, "21–22 AUGUST 2026", valf, OWHITE, tr=1*S, cx=colL)
T(det_y+68*S, "Friday & Saturday", subf, MUTE, cx=colL)
T(det_y, "VENUE", labf, SKY, tr=4*S, cx=colR)
T(det_y+28*S, "GRAPHIC ERA UNIVERSITY", valf, OWHITE, cx=colR)
T(det_y+68*S, "Dehradun, Uttarakhand, India", subf, MUTE, cx=colR)

# ===== STATS =====
stat_ln = det_y + 112*S
d.line([(MARGIN, stat_ln), (W-MARGIN, stat_ln)], fill=(60, 70, 130), width=1*S)
numf = f(DISP_B, 50); capf = f(MONO, 12.5)
for (num, cap), c in zip([("500+","DELEGATES"),("10+","COUNTRIES"),("27","AFRICAN NATIONS")],
                         [W*0.24, W*0.50, W*0.76]):
    T(stat_ln+18*S, num, numf, GOLD, tr=1*S, cx=c)
    T(stat_ln+78*S, cap, capf, MUTE, tr=3*S, cx=c)

# ===== CTA =====
cta_y = stat_ln + 108*S
ctaf = f(SANS_B, 29)
ctat = "REGISTER  /  EXPRESS INTEREST"
ctaw = tw(ctat, ctaf, 2*S)
bh = 68*S
d.rounded_rectangle([CX-ctaw/2-44*S, cta_y, CX+ctaw/2+44*S, cta_y+bh], radius=bh//2, fill=RED)
T(cta_y+18*S, ctat, ctaf, OWHITE, tr=2*S)
T(cta_y+bh+16*S, "gcci.live/3rd-international-smart-and-future-cities-conclave", f(MONO, 15), SKY, tr=1*S)

# ===== FOOTER =====
foot_y = H - 82*S
d.line([(MARGIN, foot_y), (W-MARGIN, foot_y)], fill=GOLD, width=1*S)
T(foot_y+20*S, "ORGANISED BY GCCI, NOIDA   ·   HOSTED AT GRAPHIC ERA UNIVERSITY, DEHRADUN",
  f(MONO, 12.5), MUTE, tr=1.5*S)
T(foot_y+46*S, "TENTATIVE CREATIVE — DETAILS SUBJECT TO CHANGE", f(MONO, 11.5), DIM, tr=2*S)

final = img.resize((W//S, H//S), Image.LANCZOS)
final.save(os.path.join(OUT, "ISFCC-social-poster.png"))
print("saved", final.size)
