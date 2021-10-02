<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      listShown: false,
      selectedItem: null,
      searchValue: null,
      searchMode: false
    }
  },
  computed: {
    filteredItems: function () {
      if (!this.searchValue) {
        return this.items
      }

      return this.items.filter(item => {
        const searchValue = this.searchValue.toLowerCase()
        const id = item.id ? item.id.toString().toLowerCase().startsWith(searchValue) : false
        const label = item.label ? item.label.toLowerCase().startsWith(searchValue) : false
        const idLabel = item.id && item.label ? `${item.id.toString().toLowerCase()} - ${item.label.toLowerCase()}`.startsWith(searchValue) : false
        const name = item.name ? item.name.toLowerCase().startsWith(searchValue) : false
        const alias = item.alias ? item.alias.find(alias => alias.toLowerCase().startsWith(searchValue)) : false

        return id || label || idLabel || name || alias
      })
    }
  },
  watch: {
    searchValue: function (s) {
      this.searchMode = s && s.length > 0
    }
  },
  methods: {
    toggleList: function () {
      this.listShown = !this.listShown
    },
    selectItem: function (item) {
      this.selectedItem = item
      this.setSearchValue('')
      this.toggleList()
    },
    setSearchValue: function (searchValue) {
      this.searchValue = searchValue
    },
    nextItem: function () {
    },
    previousItem: function () {

    }
  },
  render () {
    return this.$scopedSlots.default({
      items: this.items,
      toggleList: this.toggleList,
      listShown: this.listShown,
      selectItem: this.selectItem,
      selectedItem: this.selectedItem,
      searchValue: this.searchValue,
      filteredItems: this.filteredItems,
      setSearchValue: this.setSearchValue,
      searchMode: this.searchMode,
      itemSearchMode: this.itemSearchMode,
      nextItem: this.nextItem,
      previousItem: this.previousItem
    })
  }
}
</script>
