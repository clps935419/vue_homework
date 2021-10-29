import { ref } from 'vue';
export function showCard() {
           const isOpen = ref(false);
           const handOpen = (e) => {
                e.preventDefault();
               isOpen.value = !isOpen.value;
               console.log('is', isOpen.value);
           };
           const domH = (showNum,itemHeight,gap) => {
               console.log('計算',isOpen, showNum, itemHeight);
               if (isOpen.value) {
                   return `${showNum * itemHeight + (showNum - 1) * gap}px`;
               } else {
                   return `auto`;
               }
           };
           return {
               handOpen,
               domH,
           };
       }
