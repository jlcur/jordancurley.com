---
title: "My First Blog Post"
pubDate: 2025-03-05
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro", "blogging", "learning in public"]
---

## Heading

```ts title="my-test-file.ts" {1-2}
console.log("line 1");
console.log("line 2");
console.log("line 3");
```

placeholder

```bash
echo "This terminal frame has no title"
```

placeholder

```powershell title="PowerShell terminal example"
Write-Output "This one has a title!"
```

placeholder

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log("this line is marked as deleted");
  // This line and the next one are marked as inserted
  console.log("this is the second inserted line");

  return "this line uses the neutral default marker type";
}
```

placeholder

```js "given text"
function demo() {
  // Mark any given text inside lines
  return "Multiple matches of the given text are supported";
}
```

placeholder

`This` is an inline code block! <code>This</code> is one too!
