




<!DOCTYPE html>
<html class="  ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>FacebookConnect/www/cdv-plugin-fb-connect.js at master · phonegap-build/FacebookConnect · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="phonegap-build/FacebookConnect" name="twitter:title" /><meta content="Contribute to FacebookConnect development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/2800250?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/2800250?s=400" property="og:image" /><meta content="phonegap-build/FacebookConnect" property="og:title" /><meta content="https://github.com/phonegap-build/FacebookConnect" property="og:url" /><meta content="Contribute to FacebookConnect development by creating an account on GitHub." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="A4550678:5FEE:1352F86:53332C38" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tF9xIUZ1TaSLtrrO1Jq4++dAIIkkVPKsuaTijKWrjoM=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-936df947d4d11d156f5b768aeb94946607c1d8b6.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-11b1607ffc2b820d8f390e56501ed74836813bb2.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-f701de3dc7560fa3d6dbe44075b45bb6c8525d19.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-8a59025e1ac4eea1c22b37d3f9f8d135e8079caa.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="0a38143b094d357451adc51bb611e05d">

        <link data-pjax-transient rel='permalink' href='/phonegap-build/FacebookConnect/blob/6b281e1ae9d9c57dba4a665a5dfccf36145be861/www/cdv-plugin-fb-connect.js'>

  <meta name="description" content="Contribute to FacebookConnect development by creating an account on GitHub." />

  <meta content="2800250" name="octolytics-dimension-user_id" /><meta content="phonegap-build" name="octolytics-dimension-user_login" /><meta content="6803300" name="octolytics-dimension-repository_id" /><meta content="phonegap-build/FacebookConnect" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="1824050" name="octolytics-dimension-repository_parent_id" /><meta content="phonegap/phonegap-facebook-plugin" name="octolytics-dimension-repository_parent_nwo" /><meta content="1824050" name="octolytics-dimension-repository_network_root_id" /><meta content="phonegap/phonegap-facebook-plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/phonegap-build/FacebookConnect/commits/master.atom" rel="alternate" title="Recent Commits to FacebookConnect:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public fork page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fphonegap-build%2FFacebookConnect%2Fblob%2Fmaster%2Fwww%2Fcdv-plugin-fb-connect.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="phonegap-build/FacebookConnect"
      data-branch="master"
      data-sha="9d13e3745bd11464dafe1284d43ce7f9bb412b93"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="phonegap-build/FacebookConnect" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fphonegap-build%2FFacebookConnect"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/phonegap-build/FacebookConnect/stargazers">
      84
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fphonegap-build%2FFacebookConnect"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/phonegap-build/FacebookConnect/network" class="social-count">
        743
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/phonegap-build" class="url fn" itemprop="url" rel="author"><span itemprop="title">phonegap-build</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/phonegap-build/FacebookConnect" class="js-current-repository js-repo-home-link">FacebookConnect</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/phonegap/phonegap-facebook-plugin">phonegap/phonegap-facebook-plugin</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/phonegap-build/FacebookConnect" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /phonegap-build/FacebookConnect">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/phonegap-build/FacebookConnect/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /phonegap-build/FacebookConnect/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>28</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/phonegap-build/FacebookConnect/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /phonegap-build/FacebookConnect/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/phonegap-build/FacebookConnect/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /phonegap-build/FacebookConnect/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/phonegap-build/FacebookConnect/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /phonegap-build/FacebookConnect/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/phonegap-build/FacebookConnect/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /phonegap-build/FacebookConnect/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/phonegap-build/FacebookConnect.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap-build/FacebookConnect.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/phonegap-build/FacebookConnect" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap-build/FacebookConnect" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save phonegap-build/FacebookConnect to your computer and use it in GitHub Desktop." aria-label="Save phonegap-build/FacebookConnect to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/phonegap-build/FacebookConnect/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download phonegap-build/FacebookConnect as a zip file"
                   title="Download phonegap-build/FacebookConnect as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:37e3a46f7c4bc53d5e57a70f029c6682 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/phonegap-build/FacebookConnect/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/blob/master/www/cdv-plugin-fb-connect.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/v0.4.0/www/cdv-plugin-fb-connect.js"
                 data-name="v0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.4.0">v0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/1.4.1support/www/cdv-plugin-fb-connect.js"
                 data-name="1.4.1support"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.1support">1.4.1support</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.3.2/www/cdv-plugin-fb-connect.js"
                 data-name="0.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.2">0.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.3.1/www/cdv-plugin-fb-connect.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.3.0/www/cdv-plugin-fb-connect.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.2.4/www/cdv-plugin-fb-connect.js"
                 data-name="0.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.4">0.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.2.3/www/cdv-plugin-fb-connect.js"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.2.2/www/cdv-plugin-fb-connect.js"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.2.1/www/cdv-plugin-fb-connect.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.2.0/www/cdv-plugin-fb-connect.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.1.1/www/cdv-plugin-fb-connect.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap-build/FacebookConnect/tree/0.1.0/www/cdv-plugin-fb-connect.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap-build/FacebookConnect" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FacebookConnect</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap-build/FacebookConnect/tree/master/www" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">cdv-plugin-fb-connect.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="www/cdv-plugin-fb-connect.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/phonegap-build/FacebookConnect/contributors/master/www/cdv-plugin-fb-connect.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>64 lines (61 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.814 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/phonegap-build/FacebookConnect/raw/master/www/cdv-plugin-fb-connect.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/phonegap-build/FacebookConnect/blame/master/www/cdv-plugin-fb-connect.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/phonegap-build/FacebookConnect/commits/master/www/cdv-plugin-fb-connect.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="nx">CDV</span> <span class="o">=</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">CDV</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="p">{}</span> <span class="o">:</span> <span class="nx">CDV</span> <span class="p">);</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">cordova</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">cordova</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Cordova</span><span class="p">;</span></div><div class='line' id='LC3'><span class="nx">CDV</span><span class="p">.</span><span class="nx">FB</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">apiKey</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// create the fb-root element if it doesn&#39;t exist</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;fb-root&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elem</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s1">&#39;fb-root&#39;</span><span class="p">;</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xmlhttp</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xmlhttp</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Endpoint saved &quot;</span><span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);}</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xmlhttp</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="s2">&quot;https://www.facebook.com/impression.php&quot;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xmlhttp</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">&#39;plugin=featured_resources&amp;payload={&quot;resource&quot;: &quot;adobe_phonegap&quot;, &quot;appid&quot;: &quot;&#39;</span><span class="o">+</span><span class="nx">apiKey</span><span class="o">+</span><span class="s1">&#39;&quot;, &quot;version&quot;: &quot;3.0.0&quot; }&#39;</span><span class="p">);</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">authResponse</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">localStorage</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;{&quot;expiresIn&quot;:0}&#39;</span><span class="p">);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">authResponse</span> <span class="o">&amp;&amp;</span> <span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nowTime</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">&gt;</span> <span class="nx">nowTime</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update expires in information</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updatedExpiresIn</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">-</span> <span class="nx">nowTime</span><span class="p">)</span> <span class="o">/</span> <span class="mi">1000</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">=</span> <span class="nx">updatedExpiresIn</span><span class="p">;</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">authResponse</span><span class="p">));</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="nx">authResponse</span><span class="p">,</span> <span class="s1">&#39;connected&#39;</span><span class="p">);</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Cordova Facebook Connect plugin initialized successfully.&#39;</span><span class="p">);</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">apiKey</span><span class="p">]);</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="nx">login</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{</span> <span class="nx">scope</span><span class="o">:</span> <span class="s1">&#39;&#39;</span> <span class="p">};</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// login</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expirationTime</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">===</span> <span class="mi">0</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="mi">0</span> </div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">=</span> <span class="nx">expirationTime</span><span class="p">;</span> </div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">));</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">,</span> <span class="s1">&#39;connected&#39;</span><span class="p">);</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;login&#39;</span><span class="p">,</span> <span class="nx">params</span><span class="p">.</span><span class="nx">scope</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="nx">logout</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;notConnected&#39;</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;logout&#39;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="nx">getLoginStatus</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;getLoginStatus&#39;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="nx">dialog</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// login</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;showDialog&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">params</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC63'><span class="p">};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04707s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

