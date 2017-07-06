# vue-pagination-bootstrap
Server-side paging component in vue, template based on bootstrap

* [Vue.js](http://vuejs.org/) (tested with 2.x)
* [Bootstrap CSS](http://getbootstrap.com/) (tested with 4.x)

### Installation

```bash
$ npm install vue-pagination-bootstrap
```

### Example
```js
import pagination from 'vue-pagination-bootstrap'
    
new Vue({
  el: '#app',,
  components: { pagination }
  data () {
    return {
      total: 1000,
      pageSize: 50,
      paginationOptions: { // Not required to pass this configurations
		    offset: 2,
        previousText: 'Prev',
        nextText: 'Next',
        alwaysShowPrevNext: true
      }
    }
  },
  methods: {
    pageChanged (page) {            
      console.log(page)
      // Exec your response to server passing 'page' params as clicked button paging
    }
  }
})
```

```html
<body id="app">
  <pagination :total="total" :page-size="pageSize" :callback="pageChanged" :options="paginationOptions" nav-class="padding-10" ul-class="bg-color-red" li-class="txt-color-blue">
  </pagination>
</body>
```

#### Props
| Name          | Type     | Default | Required | Description
| :------------ | :--------| :-------| :--------| :-----------
| total         | Number   |         | true     | Total itens in server side
| pageSize      | Number   |         | true     | Number of itens in page
| callback      | Function |         | true     | Callback function used to load data for selected page
| nav-class     | String   |         | false    | Class will be include in nav element
| ul-class      | String   |         | false    | Class will be include in ul element
| li-class      | String   |         | false    | Class will be include in all li element

##### Options
| Name                | String  | Default     | Description
| :-------------------| :-------| :-----------| :-------
| offset              | Number  | 3           | Left and right offset of pagination numbers to display
| ariaPrevious        | String  | Previous    | Change default aria previous text
| ariaNext            | String  | Next        | Change default aria next text
| previousText        | String  | «           | Change default previous button text
| nextText            | String  | »           | Change default next button text
| alwaysShowPrevNext  | Boolean | false       | Show prev/next button even if on first/last page
