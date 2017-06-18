# vue-pagination-bootstrap
Server-side paging component in vue, template based on bootstrap

* [Vue.js](http://vuejs.org/) (tested with 1.x & 2.x)
* [Bootstrap CSS](http://getbootstrap.com/) (tested with 3.x & 4.x)

### Installation

```bash
$ npm install vue-pagination-bootstrap
```

### Example
```js
import pagination from 'vue-pagination-bootstrap'
    
new Vue({
  el: '#app',
  components: { pagination },
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
  <pagination :total="total" :page-size="pageSize" :callback="pageChanged" :options="paginationOptions"></pagination>
</body>
```

#### Props
| Name          | Type     | Default | Required | Description
| :------------ | :--------| :-------| :--------| :-----------
| total         | Number   |         | true     | Total items in server side
| pageSize      | Number   |         | true     | Number of items in page
| callback      | Function |         | true     | Callback function used to load data for the selected page
| options       | Object   |         | false    | An configuration object to overwrite the defaults [options](#options) of the pagination

##### Options
| Name                | String  | Default     | Description
| :-------------------| :-------| :-----------| :-------
| offset              | Number  | 3           | Left and right offset of pagination numbers to display
| ariaPrevious        | String  | Previous    | Change default aria previous text
| ariaNext            | String  | Next        | Change default aria next text
| previousText        | String  | «           | Change default previous button text
| nextText            | String  | »           | Change default next button text
| alwaysShowPrevNext  | Boolean | false       | Show prev/next button even if on first/last page
