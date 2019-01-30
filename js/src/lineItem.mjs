const template = `
<div class="line-item">
    <select v-on:change="emitChange"></select> <button>X</button>
</div>
`;

export default {
    template,
    data: {
        presets: {
            
        },
        name: ""
    },
    methods: {
        emitChange() {

        }
    }
}