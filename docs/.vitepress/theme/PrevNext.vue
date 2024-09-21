<template>

<nav v-if="control.prev?.link || control.next?.link" class="prev-next" aria-labelledby="doc-footer-aria-label">
          <span class="visually-hidden" id="doc-footer-aria-label">Pager</span>

          <div class="row mt-4 mb-4">

            <div v-if="control.prev?.link" class="col-sm-6 mb-3 mb-sm-0 pager">
              <div class="card">
                <div class="card-body">
                  <span class="small" v-html="theme.docFooter?.prev || 'Previous page'"></span>
                  <br />
                  <a v-if="control.prev?.link" class="stretched-link pager-link prev" :href="normalizeLink(control.prev.link)">

                    <span class="title" v-html="control.prev.text"></span>
                  </a>


                </div>
              </div>
            </div>
            <div v-else class="col-sm-6 mb-3 mb-sm-0">
            </div>
            <div  v-if="control.next?.link" class="col-sm-6">
              <div class="card text-end">
                <div class="card-body">

                  <span class="small" v-html="theme.docFooter?.next || 'Next page'"></span>
                  <br />
                  <a v-if="control.next?.link" class="stretched-link pager-link next" :href="normalizeLink(control.next.link)">

                    <span class="title" v-html="control.next.text"></span>
                  </a>

                </div>
              </div>
            </div>
          </div>

        </nav>

</template>


<script setup lang="ts">
import { useData } from 'vitepress'

import { usePrevNext } from './composables/prev-next'
import { normalizeLink } from './support/utils'


//const route = useRoute()

const { theme } = useData()

const control = usePrevNext()



</script>
