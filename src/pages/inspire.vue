<template>
  <div class="root">
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-2 aside">
          <nav class="menu">
            <p class="menu-label">
            General
            </p>
            <ul class="menu-list">
              <li><a href="/bulma-admin-dashboard-template/"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Dashboard</a></li>
            </ul>
            <p class="menu-label">
            Administration
            </p>
            <ul class="menu-list">
              <li><a class="is-active" href="#"><span class="icon is-small"><i class="fa fa-pencil-square-o"></i></span> Forms</a></li>
              <li><a href="/bulma-admin-dashboard-template/ui-elements.html"><span class="icon is-small"><i class="fa fa-desktop"></i></span> UI Elements</a></li>
              <li><a href="/bulma-admin-dashboard-template/tables.html"><span class="icon is-small"><i class="fa fa-table"></i></span> Tables</a></li>
              <li><a href="/bulma-admin-dashboard-template/presentations.html"><span class="icon is-small"><i class="fa fa-bar-chart"></i></span> Presentations</a></li>

              <li>
                <a class=""><i class="fa fa-cog"></i></span> Settings</a>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
            </ul>
            <p class="menu-label">
            Live On
            </p>
            <ul class="menu-list">
              <li><a><span class="icon is-small"><i class="fa fa-bug"></i></span> Additional Pages</a></li>
              <li><a><span class="icon is-small"><i class="fa fa-windows"></i></span> Extras</a></li>
              <li><a><span class="icon is-small"><i class="fa fa-laptop"></i></span> Landing Page</a></li>
            </ul>
          </nav>
        </aside>

        <main class="column main">
          <nav class="breadcrumb is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li class="is-active"><a href="#" aria-current="page">Forms</a></li>
            </ul>
          </nav>

          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="title">Forms (<a href="http://bulma.io/documentation/form/general/">read more</a>)</div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button type="button" class="button is-small">
                  March 8, 2017 - April 6, 2017
                </button>
              </div>
            </div>
          </div>

          <div class="columns is-multiline">
            <div class="column is-9">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">From</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Name">
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="field has-addons">
                      <p class="control">
                      <a class="button is-static">
                        +44
                      </a>
                      </p>
                      <p class="control is-expanded">
                      <input class="input" type="tel" placeholder="Your phone number">
                      </p>
                    </div>
                    <p class="help">Do not enter the first zero</p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Department</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select>
                          <option>Business development</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label">
                  <label class="label">Already a member?</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="member">
                        Yes
                      </label>
                      <label class="radio">
                        <input type="radio" name="member">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Subject</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
                    </div>
                    <p class="help is-danger">
                    This field is required
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Question</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label">
                  <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>
