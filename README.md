# v-redirect

```javascript

import vredirect from 'v-redirect'
Vue.use(vredirect);

 ```

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
