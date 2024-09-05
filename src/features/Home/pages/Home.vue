<script setup>
import { Button } from '@/components/ui/button'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { stringConcatenation } from '@/utils/performance'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content:
      'Yes! You can use the transition prop to configure the animation.',
  },
]

function toggleDarkMode() {
  const root = document.querySelector(':root')
  root?.classList.toggle('dark')
}

function changeTheme(theme) {
  let root = document.querySelector(':root')

  const isDark = root?.classList.contains('dark')

  root.className = ''
  if (isDark) root?.classList.add('dark')
  root?.classList.add(theme)
}
</script>

<template>
  <main class="container py-8">
    <div class="my-8">
      <Button @click="toggleDarkMode">Toggle Dark Mode</Button>
      <Button @click="changeTheme('theme-green')" variant="outline">
        Change Theme Green
      </Button>
      <Button @click="changeTheme('theme-red')" variant="destructive">
        Change Theme Red
      </Button>
      <Button @click="changeTheme('theme-blue')" variant="secondary">
        Change Theme Blue
      </Button>
    </div>

    <section class="my-8">
      <Accordion type="multiple" class="w-full" collapsible>
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Item 4</AccordionTrigger>
          <AccordionContent>
            <div class="text-green-600">I am item 4</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section class="my-8">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" side="right">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User class="w-4 h-4 mr-2" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard class="w-4 h-4 mr-2" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings class="w-4 h-4 mr-2" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard class="w-4 h-4 mr-2" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users class="w-4 h-4 mr-2" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus class="w-4 h-4 mr-2" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail class="w-4 h-4 mr-2" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare class="w-4 h-4 mr-2" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle class="w-4 h-4 mr-2" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus class="w-4 h-4 mr-2" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github class="w-4 h-4 mr-2" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy class="w-4 h-4 mr-2" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud class="w-4 h-4 mr-2" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut class="w-4 h-4 mr-2" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>

    <section class="my-8">
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        facere, rem nesciunt libero dolor blanditiis aperiam minima harum,
        voluptatem placeat quos qui a magni, dignissimos doloribus aliquid et
        cupiditate quibusdam. Adipisci, et tempore. Perspiciatis deleniti quis
        reprehenderit amet harum earum blanditiis quas reiciendis, magni
        laboriosam accusamus culpa dolore velit quos! Obcaecati modi inventore,
        mollitia dolor numquam sed nemo laborum tempore similique, harum a
        blanditiis ut qui quas animi quasi. Voluptates inventore consequuntur
        itaque nesciunt, cum cumque. Soluta repudiandae sed laudantium. Natus
        minus voluptates nihil iste ipsum ipsa, quia recusandae. Cum ut
        asperiores aliquam laudantium voluptatum laboriosam vero quibusdam ex a
        quis, tempora praesentium impedit, facere mollitia expedita ducimus.
        Similique ad adipisci, odit doloribus et harum dolorem ea enim nesciunt?
        Omnis eos repellat accusantium ad nostrum excepturi at cumque tenetur
        minus natus asperiores labore magnam et hic fugit temporibus, fuga
        molestiae totam odit eius quam vero inventore. Culpa ipsam sunt modi
        error! Minima, quidem iure velit ex harum magni quae veniam quis facilis
        fugit nihil obcaecati, asperiores deleniti inventore temporibus
        perferendis eius, nostrum aliquam fuga iste! Aut dolore sint hic
        distinctio harum incidunt mollitia cupiditate. Nesciunt voluptas cum,
        nobis quo veritatis dignissimos doloribus illum eveniet doloremque,
        consequuntur enim. Expedita, ea dolor?
      </div>
    </section>

    <section class="my-8">
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div class="p-4 border rounded">
            Make changes to your account here.
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>

    <div class="my-8">
      <TooltipProvider :delayDuration="100">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p class="p-10">Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </main>
</template>
