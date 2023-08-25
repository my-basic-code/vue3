<template>
  <main class="mt-[60px] my-[117px] mx-auto max-w-[335px]">
    <form>
      <h1 class="text-[28px] font-normal uppercase text-left">Login</h1>
      <div class="mt-5">
        <img :src="Images.Line.src" :alt="Images.Line.alt" />
      </div>
      <article class="mt-7">
        <Input label="이메일" type="text" placeholder="이메일을 입력해주세요" classLabel="block text-base font-bold"
          :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"></Input>
        <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" wrapClass="mt-7"
          classLabel="block text-base font-bold"
          :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"></Input>
      </article>
      <div class="mt-10">
        <Button :class="`w-full py-4 px-9 ${classBtn[1]}`">로그인</Button>
      </div>
      <article class="flex justify-center mt-10 space-x-5">
        <Button class="w-[52px] h-[52px] rounded-full bg-white">
          <img :src="Images.btnKakaotalk.src" :alt="Images.btnKakaotalk.alt" />
        </Button>
        <Button class="w-[52px] h-[52px] rounded-full bg-white">
          <img :src="Images.btnGoogle.src" :alt="Images.btnGoogle.alt" />
        </Button>
      </article>
      <article class="flex justify-center space-x-6 mt-7">
        <p class="relative text-sm font-normal">
          회원가입
          <span class="absolute inset-y-0 -right-3 w-[1px] bg-[#F2F4F6]"></span>
        </p>
        <p class="relative text-sm font-normal">
          비밀번호 찾기
          <span class="absolute inset-y-0 -right-3 w-[1px] bg-[#F2F4F6]"></span>
        </p>
        <p class="relative text-sm font-normal">이메일 찾기</p>
      </article>
    </form>
  </main>
</template>

<script setup>
import Button from "@/components/ui/Button.vue"
import Input from "@/components/ui/Input.vue"
import { classInputCustom, classBtn } from "@/utils/customClass.js"
import Images from "@/constants/images.js"
</script>
