<template>
  <div style="border: 1px solid #ccc">
    <h1>展示富文本编辑器的使用</h1>
    <a href="https://www.wangeditor.com/" target="_blank">【wangeditor】</a>
    <div class="rich-txt my-8 border">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
  <button @click="save" class="px-6 py-2 bg-green-700 text-white">保存</button>
</template>
<script lang="ts" setup>
// https://www.wangeditor.com/v5/menu-config.html#%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87
// wangEditor实现文件上传
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

const serverUrl = 'http://localhost:3006';

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref('<p>hello</p>');

const mode = 'default';

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    // 配置图片上传功能
    uploadImage: {
      // 服务器接口路径
      server: serverUrl + '/common/upload_wang_editor',
      // 上传时候form-data中的name属性
      fieldName: 'file',
      // 自定义插入
      customInsert(res: any, insertFn: any) {
        // res 即服务端的返回结果
        // console.log(res);
        // 从 res 中找到 url alt href ，然后插图图片
        insertFn(serverUrl + res.data.url);
      },
    },
  },
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const save = () => {
  console.log(valueHtml.value);
};
</script>
