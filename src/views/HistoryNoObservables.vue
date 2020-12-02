<!-- Seems simple now, right? -->
<template>
    <div>
        <h2>History, no observables</h2>

        <h3>Current History</h3>
        <select v-model="historyId">
            <option value="1">History 1</option>
            <option value="2">History 2</option>
            <option value="3">History 3</option>
        </select>

        <h3>Search Params</h3>
        <div>{{ params }}</div>
    </div>
</template>

<script>

export default {
    props: {
        history: { type: History },
    },
    data() {
        return {
            historyId: 1,
            params: { historyId: 1 },
            hid: 0
        }
    },
    computed: {
        historyId() {
            return this.history.id;
        },
        hid() {
            return this.history.hid_counter;
        },
    },
    watch: {
        historyId(newId) {
            this.params = { historyId: newId };
        },
        // async params(newParams) {
        //     await this.doAjaxLoad(newParams, this.hid);
        //     await this.retrieveFromCach(newParms, this.hid);
        // }
    }
}

</script>