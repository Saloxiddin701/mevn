"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[260],{1260:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var a=s(6190),l=s(9582),o=s(4886),n=s(266),i=s(2150),r=s(9223),c=s(1234),p=s(5125),u=s(3059),m=s(1713),d=s(8088),f=s(6072),g=function(){var t=this,e=t._self._c;return e(u.Z,[e(i.Z,[e(m.Z,{attrs:{"no-gutters":""}},[e(n.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(l.Z,{staticClass:"pa-5"},[e(o.EB,[t._v("Add new Post")]),e(r.Z),e(p.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(d.Z,{attrs:{label:"Title","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),e(d.Z,{attrs:{label:"Category","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}}),e(f.Z,{attrs:{label:"Content","prepend-icon":"mdi-note-plus",rules:t.rules},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),e(c.Z,{attrs:{rules:t.rules,"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(a.Z,{staticClass:"mt-3",attrs:{type:"submit",color:"primary"}},[t._v("Add Post")])],1)],1)],1)],1)],1)],1)},h=[],Z=s(8332),b={data:()=>({rules:[t=>!!t||"This field is required"],post:{title:"",category:"",content:"",image:""},image:""}),methods:{selectFile(t){this.image=t[0]},async submitForm(){const t=new FormData;if(t.append("image",this.image),t.append("title",this.post.title),t.append("category",this.post.category),t.append("content",this.post.category),this.$refs.form.validate()){const e=await Z.Z.addPost(t);this.$router.push({name:"home",params:{message:e.message}})}}}},y=b,v=s(1001),C=(0,v.Z)(y,g,h,!1,null,null,null),k=C.exports}}]);
//# sourceMappingURL=260.3b932e92.js.map