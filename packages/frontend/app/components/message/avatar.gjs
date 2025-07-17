<template>
  <aside aria-label={{@title}} ...attributes>
    <div
      class="avatar{{if @isActive ' is-active'}}{{if @isCurrent ' current-user'}}"
      title={{@title}}
    >
      {{@initial}}
    </div>
  </aside>
</template>
