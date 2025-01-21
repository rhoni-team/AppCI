<script setup lang="ts">
import hamButtonIcon from '@/assets/icons/hamButtonIcon.vue';
import lensIcon from '@/assets/icons/lensIcon.vue';
import notifyBellIcon from '@/assets/icons/notifyBellIcon.vue';
import DarkLightButton from '@/components/DarkLightButton.vue';

</script>

<template>
  <nav>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle drawer-button"
        >
          <label
            for="my-drawer"
            class="drawer-button"
          >
            <hamButtonIcon />
          </label>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">AppCI</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <lens-icon />
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <notify-bell-icon />
            <span class="badge badge-xs badge-info indicator-item" />
          </div>
        </button>
        <button class="btn btn-ghost btn-circle">
          <dark-light-button />
        </button>
      </div>
    </div>
  </nav>
</template>
