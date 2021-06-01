# v-redirect

```vue 
  <div>
    <div v-if='true'>
        <v-redirect :to="{
            name:'home'
        }" />
    </div>
    
     <div v-if='false'>
        <v-redirect :to="{
            name:'test',
            query:{},
            params:{}
        }" />
    </div>
  </div>
```
