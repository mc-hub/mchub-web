<template>
  <div>
    <nav class="col-lg-2 col-3 d-none d-md-block bg-light sidebar">
      <!-- koko default ni oku -->
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <n-link
              to="/"
              class="nav-link">
              <span class="mdi mdi-home"></span>
              Dashboard
            </n-link>
          </li>
          <li class="nav-item">
            <n-link
              to="/console"
              class="nav-link">
              <span class="mdi mdi-console"></span>
              Console
            </n-link>
          </li>
          <li class="nav-item">
            <n-link
              to="/players"
              class="nav-link">
              <span class="mdi mdi-account-multiple-outline"></span>
              Players
            </n-link>
          </li>
          <li class="nav-item">
            <n-link
              to="/report"
              class="nav-link">
              <span class="mdi mdi-file-document-box-multiple-outline"></span>
              Reports
            </n-link>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="d-flex align-items-center text-muted">
            <span class="mdi mdi-plus-circle mdi-18px"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <n-link
              to="/report/current-month"
              class="nav-link">
              <span class="mdi mdi-file-text"></span>
              Current month
            </n-link>
          </li>
          <li class="nav-item">
            <n-link
              to="/report/last-quarter"
              class="nav-link">
              <span class="mdi mdi-file-text"></span>
              Last quarter
            </n-link>
          </li>
          <li class="nav-item">
            <n-link
              to="/report/social-engagement"
              class="nav-link">
              <span dclass="mdi mdi-file-text"></span>
              Social engagement
            </n-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {}
</script>