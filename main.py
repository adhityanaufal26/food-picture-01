import os
import shutil

# Food picture entry: copy the rendang photograph entry.png beside this
# file to /output/entry.png. The dish is Indonesian beef rendang — tender
# beef chunks in a thick glossy golden coconut curry, steamed white rice,
# fried shallots, red chili and kaffir lime leaves, on a dark plate.
src = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")
if not os.path.isfile(src):
    raise SystemExit("entry.png missing beside main.py")
dst_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
os.makedirs(dst_dir, exist_ok=True)
dst = os.path.join(dst_dir, "entry.png")
shutil.copyfile(src, dst)
# The program runs twice and both runs must write the same bytes; the copy
# is byte-for-byte, so verify the sizes match before exiting.
if os.path.getsize(dst) != os.path.getsize(src):
    raise SystemExit("copied entry.png size mismatch")
