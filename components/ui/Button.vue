<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        'btn': true,
        [`btn-${this.variant}`]: true,
        'disabled': this.disabled
      };
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  font-size: 1em;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
