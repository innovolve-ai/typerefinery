<template>
  <div class="content-area">
    <div class="tabs-wrapper">
      <TabView
        class="tab-view-wrapper"
        :class="{ draggable: focus }"
        :active-index="activeIndex"
        @tab-click="onTabClick($event)"
      >
        <TabPanel v-for="(tab, i) in allTabs" :key="tab.id">
          <template #header>
            <div class="tab-item" :class="{ active: activeIndex === i }">
              <span>{{ tab.label }}</span>
              <i class="pi pi-times" @click.stop="closeSplitView(tab)"></i>
            </div>
          </template>
          <!-- tab 1 -->
          <content-tab
            v-if="activeIndex === i"
            :pane-id="paneId"
            :focus="focus"
            :tools-visible="contentToolsVisible"
            :tab="tab"
            @toggle="toggleContentTools"
          />
        </TabPanel>
      </TabView>

      <div
        v-show="!contentToolsVisible && !focus"
        v-tooltip="$t(`tooltips.show-content-tools`)"
        class="icon-wrapper-down hover:text-primary"
        @click="toggleContentTools"
      >
        <i class="pi pi-angle-double-down"></i>
      </div>

      <menu-bar
        v-if="focus && paneId === panes[panes.length - 1].id"
        :menu-bar-visible="contentToolsVisible"
        @toggle="toggleContentTools"
      />
    </div>
  </div>
</template>

<script>
  import { getModule } from "vuex-module-decorators"
  import TabView from "primevue/tabview"
  import TabPanel from "primevue/tabpanel"
  import MenuBar from "@/components/Menu/MenuBar.vue"
  import ContentTab from "../ContentTab"
  import Settings from "@/store/Modules/Settings"
  import Projects from "@/store/Modules/Projects"
  import AppData from "@/store/Modules/AppData"
  const settingsModule = getModule(Settings)
  const projectsModule = getModule(Projects)
  const appDataModule = getModule(AppData)

  TabView.methods.onTabClick = function (event, i) {
    this.$emit("tab-click", {
      originalEvent: event,
      index: i,
    })
  }

  export default {
    name: "ContentView",
    components: {
      ContentTab,
      MenuBar,
      TabView,
      TabPanel,
    },

    props: {
      focus: { type: Boolean, required: true },
      tabs: { type: Array, required: true },
      paneId: { type: String, required: true },
      panes: { type: Array, required: true },
    },
    emits: ["split-view", "close-split-view"],
    data() {
      return {
        contentToolsVisible: true,
        activeIndex: 0,
      }
    },

    computed: {
      allTabs() {
        return this.tabs.map((el) => ({
          ...el,
          label: projectsModule.getQueries(el.projectIdx)[el.queryIdx].label,
        }))
      },
    },

    watch: {
      focus(isTrue) {
        if (isTrue) this.contentToolsVisible = false
        else this.contentToolsVisible = true
      },
      tabs(newVal) {
        if (newVal.length === 1) {
          this.activeIndex = 0
        }
      },
    },

    methods: {
      onTabClick(e) {
        const ctrl = e.originalEvent?.ctrlKey
        if (ctrl) {
          this.splitView(e.index)
        } else {
          this.activeIndex = e.index
        }
      },

      toggleContentTools() {
        this.contentToolsVisible = !this.contentToolsVisible
        settingsModule.resizeView()
      },

      splitView(idx) {
        this.$emit("split-view", idx)
      },

      closeSplitView(tab) {
        if (this.paneId == "pane2") {
          return this.$emit("close-split-view")
        }
        appDataModule.removeSelectedTreeNodes(tab.id)
        appDataModule.toggleTreeNode()
      },
    },
  }
</script>

<style lang="scss">
  #body {
    .content-area {
      .tabs-wrapper {
        position: relative;
        height: 100%;

        .tab-item {
          display: flex;
          align-items: center;

          .pi-times {
            margin-left: 10px;
            font-size: 90%;
            position: relative;
            top: 1px;
          }
        }

        .icon-wrapper-down {
          position: absolute;
          top: 12px;
          right: 10px;
          cursor: pointer;
        }

        .tab-view-wrapper {
          height: 100%;
        }

        .p-tabview {
          .p-tabview-panels {
            height: calc(100% - 39px);
            padding: 0;
          }

          .p-tabview-panel {
            height: 100%;
          }
        }
      }
    }
  }
</style>
