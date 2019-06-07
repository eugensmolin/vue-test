export default {
    data() {
        return {
            search: '',
            names: ['Vlad', 'Elena', 'Max', 'Igor']
        }
    },
    computed: {
        filterNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            })
        }
    }
}