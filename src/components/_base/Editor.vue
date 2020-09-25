<template>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
    />
</template>

<script>

import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
const toolbarOptions = [
  ['bold', 'italic'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  ['link'],
  ['clean']]

export default {
  name: 'editor',
  components: {
    quillEditor
  },
  props: {
    value: {
      type: null,
      default: ' '
    }
  },
  data () {
    return {
      content: `${this.value}`,
      editorOption: {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        },
        value: ' '
      }
    }
  },
  watch: {
    content (newVal) {
      if (newVal === '') {
        this.$emit('input', ' ')
      } else {
        this.$emit('input', newVal)
      }
    },
    value (newVal) {
      this.content = newVal
    }
  }
}
</script>

<style lang="scss">

.ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: var(--primary);
}

.ql-snow.ql-toolbar button svg, .ql-snow .ql-toolbar button svg {
  &:hover, &:focus {
    stroke: var(--primary);
  }

}

.ql-container {
  font-family: var(--font-family-sans-serif);
  font-size: 1rem;
}
</style>
