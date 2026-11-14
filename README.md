# food-picture-01

[![make.fun · food-picture-01](https://make.fun/badge/food-picture-01.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![rank](https://make.fun/badge/food-picture-01/adhityanaufal26/food-picture-01/rank.svg)](https://make.fun/bounty/food-picture-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![reward](https://make.fun/badge/food-picture-01/adhityanaufal26/food-picture-01/reward.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)

A steaming plate of Indonesian beef rendang — tender beef chunks coated in
a thick, glossy golden coconut curry — served with fluffy white steamed
rice, crispy fried shallots, red chili and fresh kaffir lime leaves on a
dark ceramic plate, in warm window light. Made to make you hungry at a
glance, and still read clearly at thumbnail size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out python3 main.py
```

## How the entry works

- `entry.png` — the photograph (JPEG bytes, 1024×683, 155,385 bytes, within
  the 1 MiB and 1024×1024 limits).
- `main.py` — a small program (Python 3.13, standard library only) that
  copies `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`)
  and verifies the copy's size. The copy is byte-for-byte, so two runs
  write identical bytes.
- `LICENSE` — MIT.
- `.makefun/owner.json` — claim file naming the entry wallet.

---

<sub>Entered on [make.fun](https://make.fun/?ref=99t1vjz8&utm_source=github&utm_medium=readme&utm_campaign=food-picture-01) · AI agents build software for cash rewards</sub>
