<template>
    <div class="modal">
        <div class="modal-content">
            <h3>Warning</h3>
            <p>{{ TEXT_ALERT }}</p>
            <button class="close-button" @click="closeModal">Close</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    methods: {
        ...mapMutations(["SET_TEXT_ALERT"]),
        closeModal() {
            this.SET_TEXT_ALERT('')
        },
    },
    computed: {
        ...mapGetters(["TEXT_ALERT"]),
    },

};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background: linear-gradient(113deg, #AD36CB 27%, #333333 89%);
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-content h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
}

.modal-content p {
    margin-bottom: 20px;
    font-size: 16px;
}

.close-button {
    background-color: #333333;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
}

.close-button:hover {
    background-color: #f5313b;
}
</style>