<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="arrow down" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>

    <!-- invoices -->
    <div v-if="invoiceData.length > 0">
      <Invoice
        v-for="(invoice, index) in invoiceData"
        :invoice="invoice"
        :key="index"
      />
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt="" />
      <h3>There is nothing here</h3>
      <p>
        Create a new invoice by clicking the New Invoice button to get started
      </p>
    </div>
  </div>
</template>

<script>
  import Invoice from '../components/Invoice.vue';
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Home',
    data() {
      return {
        filterMenu: null,
      };
    },
    components: {
      Invoice,
    },
    methods: {
      ...mapMutations(['TOGGLE_INVOICE']),
      newInvoice() {
        this.TOGGLE_INVOICE();
      },

      toggleFilterMenu() {
        this.filterMenu = !this.filterMenu;
      },
    },
    computed: {
      ...mapState(['invoiceData']),
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    color: #fff;

    .header {
      margin-bottom: 65px;
    }

    .left,
    .right {
      flex: 1;
    }

    h1 {
      font-size: 1rem;
    }

    span {
      font-size: 0.7rem;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 0.7rem;
        }
      }
    }

    .filter {
      position: relative;
      margin-right: 40px;
      cursor: pointer;
      font-size: 0.7rem;

      img {
        margin-left: 12px;
        width: 9px;
        height: 5px;
      }

      .filter-menu {
        width: 120px;
        position: absolute;
        top: 25px;
        list-style: none;
        background-color: #1e2139;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          cursor: pointer;
          font-size: 0.7rem;
          padding: 10px 20px;

          &:hover {
            color: #1e2139;
            background-color: #fff;
          }
        }
      }
    }

    .button {
      padding: 8px 16px;
      background-color: #7c5dfa;
      border-radius: 40px;
      font-size: 0.6rem !important;

      .inner-button {
        margin-right: 8px;
        border-radius: 50%;
        padding: 8px;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        img {
          height: 10px;
          width: 10px;
        }
      }
    }

    .empty {
      margin-top: 160px;
      align-items: center;

      img {
        width: 214px;
        height: 200px;
      }

      h3 {
        font-size: 0.8rem;
        margin-top: 40px;
      }

      p {
        text-align: center;
        max-width: 224px;
        font-size: 0.6rem;
        font-weight: 300;
        margin-top: 16px;
      }
    }
  }
</style>
