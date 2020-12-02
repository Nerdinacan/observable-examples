<template>
    <div>
        <h1>Consequences of Vue's observability system</h1>

        <h2>Vue is good at combining things it already has in hand.</h2>
        <p>
            First name <input v-model="firstname"><br/>
            Last name <input v-model="lastname"><br/>
            Full name: {{ fullname }}<br/>
            <!-- nameRankSerial: {{ nameRankSerial }}<br/> -->
        </p>


        <h2>Vue is not so great at combining things if it needs to retrieve
        them asychronously. Almost everything useful in a modern browser is async.</h2>

        <p>You will end up having to create a bunch of temporary variables
        to hold async results and probably reset them according to logic that will
        grow more byzantine as your requirements expand.</p>

        <p>Name, rank, serial {{ nrs }}</p>

        <p>In functional programming, this is referred to as point-free programming</p>


        <h2>Problem 2: Vue tries to hide why it's updating child components... as a
        convenience for you. Yay?</h2>



    </div>
</template>


<script>

const fakeLookup = (name, delay = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + "123");
        }, delay);
    })
}

export default {
    data() {
        return {
            firstname: "",
            lastname: "",

            // I have to make this variable because of Vue's observability
            // sytem. We will need to make some similar intermediate variable
            // every single time we do something else asychronous, and your Vue
            // config will balloon into a bunch of archaic temp vars if you try
            // to do this without observables.
            nrs: "",
        }
    },

    computed: {

        fullname() {
            const { firstname, lastname } = this;
            return `${firstname} ${lastname}`.trim();
        },

        // Vue won't do this
        // async nameRankSerial() {
        //     const serial = await fakeLookup(this.fullname);
        //     return serial;
        // }
    },

    // watch: {
    //     async fullname(newName) {
    //         const serial = await fakeLookup(newName);
    //         this.nrs = serial;
    //     }
    // }
}

</script>