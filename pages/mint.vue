<template>
  <section>
    <header class="page--header mint flex flex-col justify-center items-center">
      <div class="container flex flex-col justify-center">
        <h4>Create your NFT Ticket(s)</h4>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li>Mint Tickets</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section class="home--body flex justify-center">
        <div class="cto--container max-w-screen-xl w-full px-4 min-h-screen">
          <div>
            <div
              class="bg-base-100/30 backdrop-blur min-h-screen my-5 rounded-2xl py-16 px-14"
            >
              <div class="mb-12">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Select Store</span>
                  </label>
                  <select v-model="mintStore" class="select w-full">
                    <option disabled selected>Select a store</option>
                    <option
                      v-for="(aStore, i) in store.stores"
                      :key="i"
                      :value="aStore.minter_id"
                    >
                      {{ aStore.nft_contracts.name }}
                    </option>
                  </select>
                </div>
              </div>
              <h3 class="mb-4 font-bold">Event banner</h3>
              <p class="">
                This image will appear at the top of your collection page. Avoid
                including too much text in this banner image, as the dimensions
                change on different devices. 1400 x 350 recommended
              </p>
              <div class="mt-5">
                <b-field>
                  <b-upload v-model="event_banner" drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>PNG,JPG,JPEG,SVG, (Max-50mb)</p>
                        <nif-btn> Upload Banner Image </nif-btn>
                      </div>
                    </section>
                  </b-upload>
                </b-field>

                <div v-if="event_banner.name" class="tags">
                  <span class="tag is-primary">
                    {{ event_banner.name }}
                  </span>
                </div>
              </div>
              <div class="mt-12">
                <b-field label="Ticket Name">
                  <b-input
                    v-model="ticketName"
                    placeholder="Ticket Name"
                  ></b-input>
                </b-field>
              </div>
              <div class="grid ticket--image">
                <div class="mt-5">
                  <h3>Ticket Flyer</h3>
                  <p>
                    This image or Video will serve as a means of attractions.
                    for user to buy the ticket. as the dimensions change on
                    different devices. 1080 x 1080 recommended.
                  </p>
                </div>
                <div class="mt-5">
                  <b-field>
                    <b-upload v-model="ticket_flyer" drag-drop>
                      <section class="section">
                        <div class="content has-text-centered">
                          <p>PNG,JPG,JPEG,SVG,GIF (Max-50mb)</p>
                          <nif-btn> Upload Flyer Image </nif-btn>
                        </div>
                      </section>
                    </b-upload>
                  </b-field>

                  <div v-if="ticket_flyer.name" class="tags">
                    <span class="tag is-primary">
                      {{ ticket_flyer.name }}
                    </span>
                  </div>
              </div>
              </div>
              <div class="mt-12">
                <b-field label="Ticket Decription">
                  <b-input
                    v-model="description"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa cumque doloremque doloribus ea esse nihil numquam quam quas qui quibusdam repellendus, temporibus voluptate! Cum excepturi expedita non quo ullam."
                    maxlength="150"
                    type="textarea"
                  ></b-input>
                </b-field>
              </div>
              <div class="mt-12">
                <b-field class="tag--grid">
                  <b-radio-button
                    v-model="event_category"
                    native-value="Technology Submit"
                    type="is-success is-light"
                  >
                    <span>Technology Submit</span>
                  </b-radio-button>

                  <b-radio-button
                    v-model="event_category"
                    native-value="Music"
                    type="is-success is-light"
                  >
                    <span>Music</span>
                  </b-radio-button>

                  <b-radio-button
                    v-model="event_category"
                    native-value="Party House"
                    type="is-success is-light"
                  >
                    Party House
                  </b-radio-button>

                  <b-radio-button
                    v-model="event_category"
                    native-value="Business"
                    type="is-success is-light"
                  >
                    Business
                  </b-radio-button>

                  <b-radio-button
                    v-model="event_category"
                    native-value="Summer Catch-Up"
                    type="is-success is-light"
                  >
                    Summer Catch-Up
                  </b-radio-button>

                  <b-radio-button
                    v-model="event_category"
                    native-value="Excursion"
                    type="is-success is-light"
                  >
                    Excursion
                  </b-radio-button>
                </b-field>
              </div>
              <div class="tickets--grid mt-12">
                <div class="radios">
                  <b-field>
                    <b-radio v-model="price_category" native-value="SINGLE">
                      SINGLE
                    </b-radio>
                  </b-field>
                  <b-field>
                    <b-radio v-model="price_category" native-value="COUPLES">
                      COUPLES
                    </b-radio>
                  </b-field>
                  <b-field>
                    <b-radio v-model="price_category" native-value="VIP">
                      VIP
                    </b-radio>
                  </b-field>
                  <b-field>
                    <b-radio v-model="price_category" native-value="VVIP">
                      VVIP
                    </b-radio>
                  </b-field>
                </div>
                <div class="cost relative">
                  <div tabindex="0" class="collapse collapse-arrow">
                    <input type="checkbox" checked />
                    <div class="collapse-title text-sm font-bold">
                      Ticket Cost for {{ price_category }}
                    </div>
                    <div class="collapse-content">
                      <b-field>
                        <b-input v-model="ticketCost" placeholder="3 NEAR"></b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div>
                  <b-field label="Quantity" class="primary-btns relative">
                    <b-numberinput
                      v-model="amount"
                      :placeholder="2"
                    ></b-numberinput>
                  </b-field>
                </div>
                <no-ssr>
                  <div>
                    <b-field label="Location">
                      <b-input
                        v-model="venue"
                        placeholder="Venue of Event"
                      ></b-input>
                    </b-field>
                  </div>
                  <div>
                    <b-field label="Select a date">
                      <b-datepicker
                        v-model="selected"
                        :show-week-number="showWeekNumber"
                        :locale="locale"
                        placeholder="Click to select..."
                        icon="calendar-today"
                        :icon-right="selected ? 'close-circle' : ''"
                        icon-right-clickable
                        trap-focus
                        @icon-right-click="clearDate"
                      >
                      </b-datepicker>
                    </b-field>
                  </div>
                </no-ssr>
                <div>
                  <b-field label="Set Time">
                    <b-timepicker
                      v-model="eventTime"
                      placeholder="Time of Event"
                      icon="clock"
                      :enable-seconds="enableSeconds"
                      :hour-format="hourFormat"
                      :locale="locale"
                    >
                    </b-timepicker>
                  </b-field>
                </div>
              </div>
              <div class="mt-12">
                <b-field label="Royalties">
                  <b-input v-model="royalties" placeholder="How to share royalties"></b-input>
                </b-field>
              </div>
              <div class="mt-12">
                <b-field label="Split Revenue">
                  <b-input v-model="splits" placeholder="How to Split Revenue"></b-input>
                </b-field>
              </div>
              <div class="flex action--btns mt-12 justify-between">
                <button
                  class="btn normal-case btn-error"
                  @click.prevent="resetForm"
                >
                  Cancel
                </button>
                <button class="def--btn btn capitalize" @click.prevent="mintTicket">
                  Create
                </button>
                <!--                <nif-btn @click.prevent="mintTicket"> Create Ticket </nif-btn>-->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import { mapWritableState } from 'pinia'
import { MetadataField } from 'mintbase'
import { useStore } from '@/store'

export default {
  setup() {
    const store = useStore()

    return { store }
  },
  data() {
    return {
      event_category: '',
      price_category: 'VVIP',
      event_banner: {},
      ticket_flyer: {},
      locale: 'en-US',
      mintStore: '',
      minter: 'aef.testnet',
      ticketName: '',
      ticketCost: '',
      amount: 0,
      eventTime: new Date(),
      royalties: '',
      splits: '',
      venue: '',
      description: '',
      isMinting: false,
      selected: new Date(),
      showWeekNumber: false,
      hourFormat: undefined, // Browser locale
      enableSeconds: false,
    }
  },
  computed: {
    ...mapWritableState(useStore, [
      'wallet',
      'details',
      'isConnected',
      'loading',
      'stores',
    ]),
  },
  async mounted() {
    await this.store.fetchMinterStores()
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
    compressImage(e) {
      this.dropFile = e
      console.log('e is', e)
    },
    async mintTicket() {
      console.log('minting')
      if (!this.mintStore) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'You need a Store to mint tickets',
          position: 'is-top-right',
          type: 'is-danger',
        })
        return
      }
      console.log('minting 1')
      if (!this.wallet || !this.wallet?.minter) {
        return
      }
      console.log('minting 2')
      if (!this.dropFile) {
        return
      }

      console.log('minting 3')
      this.isMinting = true
      const { data: bannerUploadResult, error: bannerError } = await this.wallet.minter.uploadField(
        MetadataField.Media,
        this.ticket_flyer
      )
      console.log('minting 4', bannerUploadResult)
      if (bannerError) {
        return
      }
      const { data: flyerUploadResult, error: flyerError } = await this.wallet.minter.uploadField(
        MetadataField.Animation_url,
        this.event_banner
      )
      console.log('minting 4', flyerUploadResult)
      if (flyerError) {
        return
      }
      const extraData = await this.wallet.minter.setField(MetadataField.Extra, {
        venue: this.venue,
        time: this.eventTime,
        eventDate: this.selected,
        price_category: this.price_category,
        cost: this.ticketCost
      })
      console.log('minting 5', extraData)
      if (extraData.error) {
        return
      }
      const metaStuff = this.wallet.minter.setMetadata({
        title: this.ticketName,
        description: this.description,
      })
      console.log('minting 6', metaStuff)
      const { data: metadataId, error } = await this.wallet.minter.getMetadataId();

      if (error) {
        // TODO: throw error
        return;
      }
      try {
        await this.wallet.mint(
          +this.amount,
          this.mintStore,
          undefined,
          undefined,
          this.event_category,
          {
            callbackUrl: `${window.location.origin}/events`,
            meta: JSON.stringify({
              type: 'mint',
              args: {
                contractAddress: this.mintStore,
                amount: this.amount,
                thingId: `${metadataId}:${this.mintStore}`,
              },
            }),
            royaltyPercentage: this.royalties?.percentage || 0,
            metadataId,
          },
        )
      } catch (e) {
        return e
      }
      this.isMinting = false
    },
    resetForm(){
      this.event_category = ''
      this.price_category = 'VVIP'
      this.event_banner = {}
      this.ticket_flyer = {}
      this.locale = 'en-US'
      this.mintStore = ''
      this.minter = 'aef.testnet'
      this.ticketName = ''
      this.ticketCost = ''
      this.amount = 0
      this.eventTime = new Date()
      this.royalties = ''
      this.splits = ''
      this.venue = ''
      this.description = ''
    },
    clearDate() {
      this.selected = null
    },
  },
}
</script>
<style lang="scss">
.pagination {
  .btn {
    background: hsla(var(--b1) / 0.4);
    backdrop-filter: blur(5px);
    color: hsla(var(--bc) / 0.9);
  }
}
main {
  .primary-btns {
    .control {
      .button {
        background: hsl(var(--p));
      }
    }
    .is-clearfix {
      position: absolute;
      width: 100%;
    }
    .b-numberinput.field {
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 3rem;
    }
    .control.minus,
    .control.plus {
      position: relative;
      .button {
        max-height: 30px;
        padding: 0.6em;
      }
    }
    .control.minus {
      z-index: 2;
      margin-left: 7px;
    }
    .control.plus {
      z-index: 2;
      margin-right: 7px;
    }
  }
  .upload {
    width: 100%;
    .upload-draggable {
      border: dashed 1px hsl(var(--p));
      width: 100%;
    }
  }

  .tag--grid {
    .field.has-addons {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 10px;
      .b-radio {
        background: hsl(var(--p));
        color: hsla(var(--bc) / 0.7);
        color: hsl(var(--bc));
        span {
          color: hsl(var(--bc));
        }
        &.is-selected {
          background: hsl(var(--bc));
          color: hsl(var(--p));
          span {
            color: hsl(var(--p));
          }
        }
      }
    }
  }
  .form-control {
    input {
      color: hsl(var(--bc));
      &::placeholder {
        color: hsla(var(--bc) / 0.7);
      }
    }
  }
  .formkit-wrapper,
  .formkit-fieldset {
    max-width: 100%;
  }

  .file--input {
    width: 100%;
    margin-top: 20px;
    position: relative;
    height: 200px;

    input {
      border: dashed 1px hsl(var(--p));
      width: 100%;
    }
    .image--uploader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      p {
        text-align: center;
        margin-bottom: 20px;
        color: hsla(var(--bc) / 0.7);
      }
    }
    .formkit-file-list ~ .image--uploader {
      display: none;
    }
  }
  .tickets--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    .radios {
      padding: 20px;
      background: hsla(var(--b1) / 0.5);
      border-radius: 12px;
      .b-radio {
        display: flex;
        justify-content: space-between;
        .check {
          order: 1;
        }
        &:hover {
          input[type='radio']:not(:disabled) + .check {
            border-color: hsl(var(--p));
          }
        }
        input[type='radio']:checked + .check {
          border-color: hsl(var(--p));
          &:before {
            background: hsl(var(--p));
          }
        }
        .control-label {
          order: 0;
          margin-right: 40px;
          color: hsl(var(--bc));
        }
      }
    }
    .cost {
      background: hsla(var(--b1) / 0.5);
      border-radius: 12px;
      overflow: hidden;
    }
  }
}
.ticket--image {
  grid-template-columns: 1.3fr 2.3fr;
  grid-gap: 20px;
  h3 {
    font-weight: 600;
  }
}
.action--btns {
  .formkit-input[type='submit'] {
    background: linear-gradient(to right, #27a0af, #4680bd);
    color: #fafafa;
    transition: 0.3s ease-in-out;
    position: relative;
    border-radius: 12px;
    top: -1px;
    height: 3rem;
    display: flex;
    align-items: center;
    &:hover {
      background: linear-gradient(to right, #1c707a, #2a4d72);
      top: 0;
    }
  }
  .btn {
    border-radius: 12px;
  }
}
</style>
