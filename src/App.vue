<script setup>
import StarIcon from './assets/images/icon-star.svg';
import ImageThankYou from './assets/images/illustration-thank-you.svg';
import {ref} from "vue";

const rate = ref('');

const submitted = ref(false);

const onSubmit = () => {
  submitted.value = true;
}
</script>

<template>
  <div
      class="flex justify-center items-center font-sans h-screen text-sm text-light-gray bg-very-dark-blue antialiased">
    <div class="">
      <Transition mode="out-in" appear
          enter-from-class="opacity-0 -translate-y-8"
          enter-active-class="transition duration-200 ease-in"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-out"
          leave-to-class="opacity-0 -translate-y-8"
      >
        <div v-if="!submitted" class="w-[325px] sm:w-[412px] flex flex-col p-6 space-y-6 sm:space-y-8 bg-gradient-to-br from-dark-blue to-dark-blue/30 shadow-xl rounded sm:rounded-lg">
          <div>
          <span
              class="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-medium-gray/20 rounded-full">
            <img :src="StarIcon" alt="" class="sm:h-5">
          </span>
          </div>
          <div class="">
            <h2 class="font-bold text-xl sm:text-2xl text-white">How did we do?</h2>
            <p class="mt-3 text-sm sm:text-base">Please let us know how we did with your support request. All feedback
              is appreciated
              to help us improve our offering!</p>
          </div>
          <div class="flex justify-between items-center">
            <label v-for="index in 5" :key="index"
                   :class="[rate===index?'bg-orange text-white':'bg-medium-gray/20 hover:bg-medium-gray']"
                   class="inline-flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 sm:text-lg hover:text-white rounded-full cursor-pointer transition duration-300">
              <input type="radio" name="rate" v-model="rate" :value="index" class="hidden">
              <span class="leading-none">{{ index }}</span>
            </label>
          </div>
          <div>
            <button :disabled="!rate"
                    @click.prevent="onSubmit"
                    class="w-full h-[45px] font-bold text-white uppercase tracking-wide bg-orange hover:bg-white hover:text-orange focus:outline-none shadow-sm rounded-full disabled:opacity-50 transition duration-300">
              Submit
            </button>
          </div>
        </div>

        <div v-else class="w-[325px] sm:w-[412px] flex flex-col items-center px-6 py-10 space-y-6 sm:space-y-8 bg-gradient-to-br from-dark-blue to-dark-blue/30 shadow-xl rounded sm:rounded-lg">
          <div>
            <img :src="ImageThankYou" alt="Image Thank You" class="py-2">
          </div>
          <div>
            <div
                class="inline-flex items-center h-[31px] sm:h-[33px] px-6 bg-medium-gray/20 text-sm sm:text-base text-orange leading-none rounded-full">
              You selected {{ rate }} out of 5
            </div>
          </div>
          <div class="flex flex-col items-center text-center px-2 sm:px-3">
            <h2 class="font-bold text-xl sm:text-2xl text-white">Thank you!</h2>
            <p class="mt-3 text-sm sm:text-base">
              We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
