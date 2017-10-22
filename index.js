export default {
    template: `<nav :class="[navClass]">
        <ul class="pagination justify-content-center" :class="[ulClass]">
            <li v-if="showPrevious()" :class="[liClass, { 'disabled' : internalCurrentPage <= 1 }]" class="page-item">
                <a class="page-link" href="#" v-if="internalCurrentPage <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
                <a class="page-link" href="#" v-if="internalCurrentPage > 1 " :aria-label="config.ariaPrevious" @click.prevent="changePage(internalCurrentPage - 1)">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
            </li>
            <li v-for="num in array" :class="[liClass, { 'active': num === internalCurrentPage }]" class="page-item">
                <a class="page-link" href="#" @click.prevent="changePage(num)">{{ num }}</a>
            </li>
            <li v-if="showNext()" :class="[liClass, { 'disabled' : internalCurrentPage === lastPage || lastPage === 0 }]" class="page-item">
                <a class="page-link" href="#" v-if="internalCurrentPage === lastPage || lastPage === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
                <a class="page-link" href="#" v-if="internalCurrentPage < lastPage" :aria-label="config.ariaNext" @click.prevent="changePage(internalCurrentPage + 1)">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
            </li>
        </ul>
    </nav>`,
    props: {
        currentPage: {
              type: Number,
              default: 1
        },
        total: {
            type: Number,
            required: true
        },
        pageSize: {
            type: Number,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
        options: {
            type: Object
        },
        navClass:{
            type: String,
            default: ""
        },
        ulClass:{
            type: String,
            default: ""
        },
        liClass:{
            type: String,
            default: ""
        }
    },
    data() {
        return { internalCurrentPage: 1 }
    },
    watch: {
        currentPage: {
            immediate: true,
            handler(val) {
                this.internalCurrentPage = val;
          }
        }
    },
    computed: {
        _total() { return this.total },
        _pageSize() { return this.pageSize },
        lastPage() {
            let _total = this._total / this._pageSize;
            if (_total < 1)
                return 1;

            if (_total % 1 != 0)
                return parseInt(_total + 1);

            return _total;
        },
        array() {

            let _from = this.internalCurrentPage - this.config.offset;
            if (_from < 1)
                _from = 1;

            let _to = _from + (this.config.offset * 2);
            if (_to >= this.lastPage)
                _to = this.lastPage;

            let _arr = [];
            while (_from <= _to) {
                _arr.push(_from);
                _from++;
            }

            return _arr;
        },
        config() {
            return Object.assign({
                offset: 2,
                ariaNext: 'Próximo',
                ariaPrevious: 'Anterior',
                previousText: '«',
                nextText: '»',
                alwaysShowPrevNext: true
            }, this.options);
        }
    },
    methods: {
        showPrevious() {
            return this.config.alwaysShowPrevNext || this.internalCurrentPage > 1;
        },
        showNext() {
            return this.config.alwaysShowPrevNext || this.internalCurrentPage < this.lastPage;
        },
        changePage(page) {
            if (this.internalCurrentPage === page) return;
            this.internalCurrentPage = page;
            this.callback(page);
        }
    }
};
