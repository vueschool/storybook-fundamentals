<template>
  <div>
    <div class="absolute right-0 top-0">
      <slot name="navmenu" />
    </div>
    <h1 class="m-4 text-xl">
      <slot name="title" />
    </h1>
    <hr />
    <main>
      <slot />
    </main>
  </div>
</template>
