'use client';

import { useEffect } from 'react';

const bodyHTML = `
			<script data-cfasync="false">
			(function(){var mq=window.matchMedia('(max-width:921.99px)');function apply(isMobile){var b=document.body.classList;if(isMobile){b.add('ast-header-break-point');b.remove('ast-desktop');}else{b.remove('ast-header-break-point');b.add('ast-desktop');}}apply(mq.matches);if(mq.addEventListener){mq.addEventListener('change',function(e){apply(e.matches);});}else if(mq.addListener){mq.addListener(function(e){apply(e.matches);});}})();
			</script>
			
<a
	class="skip-link screen-reader-text"
	href="#content">
		Skip to content</a>

<div
class="hfeed site" id="page">
			<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
			<p class="main-title bhf-hidden" itemprop="headline"><a href="/" title="" rel="home"></a></p>
			<style>.elementor-bc-flex-widget .elementor-686 .elementor-element.elementor-element-6898ad39.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-686 .elementor-element.elementor-element-6898ad39.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-widget-image .widget-image-caption{color:var( --e-global-color-text );font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}.elementor-686 .elementor-element.elementor-element-474656a4 img{width:45%;}.elementor-bc-flex-widget .elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-686 .elementor-element.elementor-element-41c00f52 > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;padding:10px 0px 0px 0px;}.elementor-widget-navigation-menu .menu-item a.hfe-menu-item.elementor-button{background-color:var( --e-global-color-accent );font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-weight:var( --e-global-typography-accent-font-weight );}.elementor-widget-navigation-menu .menu-item a.hfe-menu-item.elementor-button:hover{background-color:var( --e-global-color-accent );}.elementor-widget-navigation-menu a.hfe-menu-item, .elementor-widget-navigation-menu a.hfe-sub-menu-item{font-family:var( --e-global-typography-primary-font-family ), Sans-serif;font-weight:var( --e-global-typography-primary-font-weight );}.elementor-widget-navigation-menu .menu-item a.hfe-menu-item, .elementor-widget-navigation-menu .sub-menu a.hfe-sub-menu-item{color:var( --e-global-color-text );}.elementor-widget-navigation-menu .menu-item a.hfe-menu-item:hover,
								.elementor-widget-navigation-menu .sub-menu a.hfe-sub-menu-item:hover,
								.elementor-widget-navigation-menu .menu-item.current-menu-item a.hfe-menu-item,
								.elementor-widget-navigation-menu .menu-item a.hfe-menu-item.highlighted,
								.elementor-widget-navigation-menu .menu-item a.hfe-menu-item:focus{color:var( --e-global-color-accent );}.elementor-widget-navigation-menu .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:before,
								.elementor-widget-navigation-menu .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:after{background-color:var( --e-global-color-accent );}.elementor-widget-navigation-menu .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent .sub-menu .hfe-has-submenu-container a:after{background-color:var( --e-global-color-accent );}.elementor-widget-navigation-menu .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before,
								.elementor-widget-navigation-menu .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:after{border-color:var( --e-global-color-accent );}
							.elementor-widget-navigation-menu .sub-menu li a.hfe-sub-menu-item,
							.elementor-widget-navigation-menu nav.hfe-dropdown li a.hfe-sub-menu-item,
							.elementor-widget-navigation-menu nav.hfe-dropdown li a.hfe-menu-item,
							.elementor-widget-navigation-menu nav.hfe-dropdown-expandible li a.hfe-menu-item,
							.elementor-widget-navigation-menu nav.hfe-dropdown-expandible li a.hfe-sub-menu-item{font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-weight:var( --e-global-typography-accent-font-weight );}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item{padding-left:15px;padding-right:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-sub-menu-item{padding-left:calc( 15px + 20px );padding-right:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .hfe-nav-menu__layout-vertical .menu-item ul ul a.hfe-sub-menu-item{padding-left:calc( 15px + 40px );padding-right:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .hfe-nav-menu__layout-vertical .menu-item ul ul ul a.hfe-sub-menu-item{padding-left:calc( 15px + 60px );padding-right:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .hfe-nav-menu__layout-vertical .menu-item ul ul ul ul a.hfe-sub-menu-item{padding-left:calc( 15px + 80px );padding-right:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item, .elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-sub-menu-item{padding-top:15px;padding-bottom:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 ul.sub-menu{width:220px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .sub-menu a.hfe-sub-menu-item,
						 .elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown li a.hfe-menu-item,
						 .elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown li a.hfe-sub-menu-item,
						 .elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown-expandible li a.hfe-menu-item,
						 .elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown-expandible li a.hfe-sub-menu-item{padding-top:15px;padding-bottom:15px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .hfe-nav-menu__toggle{margin:0 auto;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 a.hfe-menu-item, .elementor-686 .elementor-element.elementor-element-c1ab0d8 a.hfe-sub-menu-item{font-family:"Hind", Sans-serif;font-size:20px;font-weight:400;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item, .elementor-686 .elementor-element.elementor-element-c1ab0d8 .sub-menu a.hfe-sub-menu-item{color:#979797;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item:hover,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 .sub-menu a.hfe-sub-menu-item:hover,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item.current-menu-item a.hfe-menu-item,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item.highlighted,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 .menu-item a.hfe-menu-item:focus{color:var( --e-global-color-astglobalcolor2 );}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .sub-menu,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown-expandible,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown .menu-item a.hfe-menu-item,
								.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown .menu-item a.hfe-sub-menu-item{background-color:#fff;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 .sub-menu li.menu-item:not(:last-child),
						.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown li.menu-item:not(:last-child),
						.elementor-686 .elementor-element.elementor-element-c1ab0d8 nav.hfe-dropdown-expandible li.menu-item:not(:last-child){border-bottom-style:solid;border-bottom-color:#c4c4c4;border-bottom-width:1px;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 div.hfe-nav-menu-icon{color:#000000;}.elementor-686 .elementor-element.elementor-element-c1ab0d8 div.hfe-nav-menu-icon svg{fill:#000000;}.elementor-widget-icon.elementor-view-stacked .elementor-icon{background-color:var( --e-global-color-primary );}.elementor-widget-icon.elementor-view-framed .elementor-icon, .elementor-widget-icon.elementor-view-default .elementor-icon{color:var( --e-global-color-primary );border-color:var( --e-global-color-primary );}.elementor-widget-icon.elementor-view-framed .elementor-icon, .elementor-widget-icon.elementor-view-default .elementor-icon svg{fill:var( --e-global-color-primary );}.elementor-686 .elementor-element.elementor-element-8bb1330 .elementor-icon-wrapper{text-align:center;}.elementor-686 .elementor-element.elementor-element-8bb1330.elementor-view-stacked .elementor-icon{background-color:var( --e-global-color-b01b164 );}.elementor-686 .elementor-element.elementor-element-8bb1330.elementor-view-framed .elementor-icon, .elementor-686 .elementor-element.elementor-element-8bb1330.elementor-view-default .elementor-icon{color:var( --e-global-color-b01b164 );border-color:var( --e-global-color-b01b164 );}.elementor-686 .elementor-element.elementor-element-8bb1330.elementor-view-framed .elementor-icon, .elementor-686 .elementor-element.elementor-element-8bb1330.elementor-view-default .elementor-icon svg{fill:var( --e-global-color-b01b164 );}.elementor-bc-flex-widget .elementor-686 .elementor-element.elementor-element-64942b92.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-686 .elementor-element.elementor-element-64942b92.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}:root{--page-title-display:none;}@media(max-width:1024px){.elementor-686 .elementor-element.elementor-element-474656a4 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-686 .elementor-element.elementor-element-474656a4 img{width:120px;}.elementor-bc-flex-widget .elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-686 .elementor-element.elementor-element-41c00f52.elementor-column > .elementor-widget-wrap{justify-content:center;}}@media(max-width:767px){.elementor-686 .elementor-element.elementor-element-6898ad39{width:100%;}.elementor-686 .elementor-element.elementor-element-6898ad39.elementor-column > .elementor-widget-wrap{justify-content:flex-start;}.elementor-686 .elementor-element.elementor-element-6898ad39 > .elementor-element-populated{margin:0px 0px 0px 15px;--e-column-margin-right:0px;--e-column-margin-left:15px;}.elementor-686 .elementor-element.elementor-element-474656a4 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-686 .elementor-element.elementor-element-474656a4{text-align:center;}.elementor-686 .elementor-element.elementor-element-474656a4 img{width:21%;}.elementor-686 .elementor-element.elementor-element-41c00f52{width:25%;z-index:0;}.elementor-686 .elementor-element.elementor-element-41c00f52 > .elementor-element-populated{margin:-108px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;padding:0px 0px 0px 0px;}.elementor-686 .elementor-element.elementor-element-8bb1330 .elementor-icon{font-size:25px;}.elementor-686 .elementor-element.elementor-element-8bb1330 .elementor-icon svg{height:25px;}.elementor-686 .elementor-element.elementor-element-64942b92{width:75%;}.elementor-bc-flex-widget .elementor-686 .elementor-element.elementor-element-64942b92.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-686 .elementor-element.elementor-element-64942b92.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}}@media(min-width:768px){.elementor-686 .elementor-element.elementor-element-6898ad39{width:18.912%;}.elementor-686 .elementor-element.elementor-element-41c00f52{width:63.42%;}.elementor-686 .elementor-element.elementor-element-64942b92{width:17%;}}@media(max-width:1024px) and (min-width:768px){.elementor-686 .elementor-element.elementor-element-6898ad39{width:100%;}.elementor-686 .elementor-element.elementor-element-41c00f52{width:50%;}.elementor-686 .elementor-element.elementor-element-64942b92{width:50%;}}</style>		<div data-elementor-type="wp-post" data-elementor-id="686" class="elementor elementor-686" data-elementor-post-type="elementor-hf">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-48805969 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="48805969" data-element_type="section" data-e-type="section" id="header_section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6446982e" data-id="6446982e" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-ab5dd44 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ab5dd44" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6898ad39" data-id="6898ad39" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-474656a4 elementor-widget elementor-widget-image" data-id="474656a4" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
																<a href="/"><img fetchpriority="high" width="417" height="447" src="/website-images/Asset-10.webp" class="attachment-full size-full wp-image-2231" alt="The Diet Diary Logo" srcset="/website-images/Asset-10.webp 417w, /website-images/Asset-10-280x300.webp 280w" sizes="(max-width: 417px) 100vw, 417px" /></a>								</a>
															</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-41c00f52" data-id="41c00f52" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-c1ab0d8 hfe-nav-menu__align-right elementor-hidden-mobile hfe-submenu-icon-arrow hfe-submenu-animation-none hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet elementor-widget elementor-widget-navigation-menu" data-id="c1ab0d8" data-element_type="widget" data-e-type="widget" data-settings="{&quot;padding_horizontal_menu_item&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:15,&quot;sizes&quot;:[]},&quot;padding_horizontal_menu_item_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_horizontal_menu_item_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_vertical_menu_item&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:15,&quot;sizes&quot;:[]},&quot;padding_vertical_menu_item_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_vertical_menu_item_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_row_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_row_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;menu_row_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;dropdown_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;dropdown_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;dropdown_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;width_dropdown_item&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;220&quot;,&quot;sizes&quot;:[]},&quot;width_dropdown_item_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_dropdown_item_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_horizontal_dropdown_item&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_horizontal_dropdown_item_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_horizontal_dropdown_item_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_vertical_dropdown_item&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:15,&quot;sizes&quot;:[]},&quot;padding_vertical_dropdown_item_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;padding_vertical_dropdown_item_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;distance_from_menu&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;distance_from_menu_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;distance_from_menu_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_size&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_size_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_size_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_width&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_width_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_width_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;toggle_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="navigation-menu.default">
				<div class="elementor-widget-container">
								<div class="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__text hfe-animation__float" data-layout="horizontal">
				<div role="button" class="hfe-nav-menu__toggle elementor-clickable" tabindex="0" aria-label="Menu Toggle">
					<span class="screen-reader-text">Menu</span>
					<div class="hfe-nav-menu-icon">
						<svg aria-hidden="true"  class="e-font-icon-svg e-fas-align-justify" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>					</div>
				</div>
				<nav class="hfe-nav-menu__layout-horizontal hfe-nav-menu__submenu-arrow" data-toggle-icon="&lt;svg aria-hidden=&quot;true&quot; tabindex=&quot;0&quot; class=&quot;e-font-icon-svg e-fas-align-justify&quot; viewBox=&quot;0 0 448 512&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;path d=&quot;M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;" data-close-icon="&lt;svg aria-hidden=&quot;true&quot; tabindex=&quot;0&quot; class=&quot;e-font-icon-svg e-far-window-close&quot; viewBox=&quot;0 0 512 512&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;path d=&quot;M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;" data-full-width="yes">
					<ul id="menu-1-c1ab0d8" class="hfe-nav-menu"><li id="menu-item-1014" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home parent hfe-creative-menu"><a href="/" class = "hfe-menu-item">Home</a></li>
<li id="menu-item-693" class="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"><a href="/about/" class = "hfe-menu-item">About</a></li>
<li id="menu-item-1022" class="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"><a href="/blog/" class = "hfe-menu-item">Blog</a></li>
<li id="menu-item-1325" class="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"><a href="/my-services/" class = "hfe-menu-item">Services</a></li>
<li id="menu-item-1514" class="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"><a href="/programs/" class = "hfe-menu-item">Programs</a></li>
<li id="menu-item-1291" class="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"><a href="https://wa.me/918469077410" class = "hfe-menu-item">Contact</a></li>
</ul> 
				</nav>
			</div>
							</div>
				</div>
				<div class="elementor-element elementor-element-8bb1330 elementor-hidden-desktop elementor-hidden-tablet elementor-view-default elementor-widget elementor-widget-icon" data-id="8bb1330" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
							<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjEzNzQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">
			<svg aria-hidden="true" class="e-font-icon-svg e-fas-stream" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"></path></svg>			</a>
		</div>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-64942b92 elementor-hidden-mobile" data-id="64942b92" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				</div>
				</header>

		<div id="content" class="site-content">
		<div class="ast-container">
		

	<div id="primary" class="content-area primary">

		
					<main id="main" class="site-main">
				

<article
class="post-855 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized ast-article-single" id="post-855" itemtype="https://schema.org/CreativeWork" itemscope="itemscope">

	
	
<div class="ast-post-format- single-layout-1">

	
	
	
	<div class="entry-content clear"
	data-ast-blocks-layout="true" itemprop="text"	>

		
				<div data-elementor-type="wp-post" data-elementor-id="855" class="elementor elementor-855" data-elementor-post-type="post">
				<div class="elementor-element elementor-element-7da0ddf9 e-flex e-con-boxed e-con e-parent" data-id="7da0ddf9" data-element_type="container" data-e-type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-5430e7c elementor-widget elementor-widget-heading" data-id="5430e7c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default"><span style="color:#30624E">H</span>ow
Y<span style="color:#30624E">o</span>u
Sh<span style="color:#30624E">o</span>uld
<span style="color:#30624E"> B</span>e
D<span style="color:#30624E">o</span>ing
Oa<span style="color:#30624E">t</span>
Br<span style="color:#30624E">a</span>n
fo<span style="color:#30624E">r</span>
<span style="color:#30624E">B</span>reakfast


</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-58150cb7 elementor-widget elementor-widget-text-editor" data-id="58150cb7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									
<p class="wp-block-paragraph"> </p>
<p>For me, at this moment in time… the answer is yes!</p>

<p class="wp-block-paragraph">I’ve fallen out of a good breakfast routine in the last few years since having kids – mornings feel busy, I’m usually not very hungry, and more often than not, I just start the day with a coffee and a few nibbles of whatever the girls are having for breakfast. Not ideal.</p>

<p class="wp-block-paragraph">But our good friend OAT BRAN is bringing me back!</p>

<ul class="wp-block-list">
<li>It’s creamy and soothing, like a porridge. Kind of reminds me of Malt O’ Meal from when I was a kid!</li>

<li>It takes <em>so</em> little time to cook. Like, 3 minutes or less.</li>

<li>The oat bran alone has 7 grams protein and 7 grams of fiber per serving, plus even more if you cook it into a creamy delight with milk and eggs and add some fruit, which I definitely do!</li>
</ul>

<p class="wp-block-paragraph">I use <a href="https://amzn.to/46s5Ctz" target="_blank" rel="noreferrer noopener">Bob’s Red Mill Oat Bran</a>! <em>(affiliate link)</em> We are buying several of these bags every time I go to Kowalskis (which is where I’m buying it here in the Twin Cities). Bob’s also makes an organic version that you can buy if you’re looking to use organic oats!</p>

<p class="wp-block-paragraph">You could go bonkers with it (cinnamon, nuts, chocolate chips, peanut butter, honey, etc.) but how I really love it is just plain and simple – a small steaming bowl with a drizzle of maple syrup, a melty knob of good butter, and a few juicy raspberries on top.</p>

<p class="wp-block-paragraph">We’ve been eating so much of this that we ran out of oat bran a few weeks ago, and both of my girls – who typically love oatmeal – were very disappointed to go back to the regular stuff! They’re hooked on this oat bran right along with me. Guess we’ll be buying oat bran in bulk for the foreseeable future!</p>
								</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-f1081de e-flex e-con-boxed e-con e-parent" data-id="f1081de" data-element_type="container" data-e-type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-d2be553 elementor-widget elementor-widget-html" data-id="d2be553" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
					<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/shivangipancholi-info', text: 'Book Your Appointment', color: '#45896C', textColor: '#ffffff', branding: true }); }</script>
<!-- Calendly badge widget end -->				</div>
				</div>
					</div>
				</div>
				</div>
		
		
		
			</div><!-- .entry-content .clear -->
</div>

	
</article><!-- #post-## -->

<nav class="navigation post-navigation" aria-label="Posts">
				<div class="nav-links"><div class="nav-next"><a title="Gorgeous Peach Salad" href="/gorgeous-peach-salad/" rel="next"><span class="ast-post-nav" aria-hidden="true">Next <span aria-hidden="true" class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> Gorgeous Peach Salad </p></a></div></div>
		</nav><div class="ast-single-related-posts-container ast-container--"><div class="ast-related-posts-title-section"> <h2 class="ast-related-posts-title"> Related Posts </h2> </div><div class="ast-related-posts-wrapper">						<article class="ast-related-post post-862 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
							<div class="ast-related-posts-inner-section">
								<div class="ast-related-post-content">
									<div class="ast-related-post-featured-section post-has-thumb"><div class="post-thumb-img-content post-thumb"><a aria-label="Read more about Gorgeous Peach Salad" href="/gorgeous-peach-salad/"><img width="768" height="1024" src="/website-images/1-768x1024.webp" class="attachment-large size-large wp-post-image" alt="Gorgeous Peach Salad" itemprop="" decoding="async" srcset="/website-images/1-768x1024.webp 768w, /website-images/1-225x300.webp 225w, /website-images/1-600x800.webp 600w, /website-images/1.webp 850w" sizes="(max-width: 768px) 100vw, 768px" /></a> </div></div>														<header class="entry-header related-entry-header">
																	<h3 class="ast-related-post-title entry-title">
				<a href="/gorgeous-peach-salad/" target="_self" rel="bookmark noopener noreferrer">Gorgeous Peach Salad</a>
			</h3>
		<div class="entry-meta ast-related-cat-style--none ast-related-tag-style--none"></div>														</header>
																						<div class="entry-content clear">
																			</div>
								</div>
							</div>
						</article>
											<article class="ast-related-post post-866 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
							<div class="ast-related-posts-inner-section">
								<div class="ast-related-post-content">
									<div class="ast-related-post-featured-section post-has-thumb"><div class="post-thumb-img-content post-thumb"><a aria-label="Read more about Two Huge Double Chocolate Cookies" href="/two-huge-double-chocolate-cookies/"><img width="768" height="1024" src="/website-images/2-768x1024.webp" class="attachment-large size-large wp-post-image" alt="Two Huge Double Chocolate Cookies" itemprop="" decoding="async" srcset="/website-images/2-768x1024.webp 768w, /website-images/2-225x300.webp 225w, /website-images/2-600x800.webp 600w, /website-images/2.webp 850w" sizes="(max-width: 768px) 100vw, 768px" /></a> </div></div>														<header class="entry-header related-entry-header">
																	<h3 class="ast-related-post-title entry-title">
				<a href="/two-huge-double-chocolate-cookies/" target="_self" rel="bookmark noopener noreferrer">Two Huge Double Chocolate Cookies</a>
			</h3>
		<div class="entry-meta ast-related-cat-style--none ast-related-tag-style--none"></div>														</header>
																						<div class="entry-content clear">
																			</div>
								</div>
							</div>
						</article>
					</div> </div>			</main><!-- #main -->
			
		
	</div><!-- #primary -->


	</div> <!-- ast-container -->
	</div><!-- #content -->
		<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">
			<div class='footer-width-fixer'><style>.elementor-1545 .elementor-element.elementor-element-c8f0532 > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-1545 .elementor-element.elementor-element-c8f0532:not(.elementor-motion-effects-element-type-background), .elementor-1545 .elementor-element.elementor-element-c8f0532 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#30624E;}.elementor-1545 .elementor-element.elementor-element-c8f0532 > .elementor-container{max-width:1170px;}.elementor-1545 .elementor-element.elementor-element-c8f0532{overflow:hidden;transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;padding:0px 0px 0px 0px;}.elementor-1545 .elementor-element.elementor-element-c8f0532 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-1545 .elementor-element.elementor-element-62d9ba7c.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-1545 .elementor-element.elementor-element-2e19abbf > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-1545 .elementor-element.elementor-element-2e19abbf{margin-top:2px;margin-bottom:0px;padding:20px 0px 30px 0px;}.elementor-1545 .elementor-element.elementor-element-79737d47{--grid-template-columns:repeat(0, auto);--icon-size:24px;--grid-column-gap:5px;--grid-row-gap:0px;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-widget-container{text-align:center;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon{background-color:#BF3A3A00;--icon-padding:0.3em;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon i{color:#FFFFFF;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon svg{fill:#FFFFFF;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon:hover{background-color:#8A4B4B00;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon:hover i{color:var( --e-global-color-accent );}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-social-icon:hover svg{fill:var( --e-global-color-accent );}.elementor-widget-text-editor{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );color:var( --e-global-color-text );}.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:var( --e-global-color-primary );}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap, .elementor-widget-text-editor.elementor-drop-cap-view-default .elementor-drop-cap{color:var( --e-global-color-primary );border-color:var( --e-global-color-primary );}.elementor-1545 .elementor-element.elementor-element-7b90285{text-align:center;color:#FFFFFF;}@media(max-width:1024px){.elementor-1545 .elementor-element.elementor-element-c8f0532{padding:40px 10px 0px 10px;}}@media(max-width:767px){.elementor-1545 .elementor-element.elementor-element-c8f0532{padding:30px 20px 20px 20px;}.elementor-1545 .elementor-element.elementor-element-62d9ba7c.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-1545 .elementor-element.elementor-element-2e19abbf{margin-top:0px;margin-bottom:0px;padding:0px 0px 0px 0px;}.elementor-bc-flex-widget .elementor-1545 .elementor-element.elementor-element-3b0c427.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-1545 .elementor-element.elementor-element-3b0c427.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-1545 .elementor-element.elementor-element-3b0c427.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-1545 .elementor-element.elementor-element-3b0c427 > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;padding:0px 0px 10px 0px;}.elementor-1545 .elementor-element.elementor-element-79737d47 .elementor-widget-container{text-align:center;}.elementor-1545 .elementor-element.elementor-element-7b90285 > .elementor-widget-container{margin:0px 0px -21px 0px;padding:18px 0px 0px 0px;}}</style>		<div data-elementor-type="wp-post" data-elementor-id="1545" class="elementor elementor-1545" data-elementor-post-type="elementor-hf">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-c8f0532 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c8f0532" data-element_type="section" data-e-type="section" id="contact" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-62d9ba7c" data-id="62d9ba7c" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-2e19abbf elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default" data-id="2e19abbf" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3b0c427" data-id="3b0c427" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-79737d47 e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="79737d47" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
							<div class="elementor-social-icons-wrapper elementor-grid" role="list">
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-square elementor-animation-grow elementor-repeater-item-6b56f98" href="https://www.facebook.com/people/The-Diet-Diary/61573061219105/" target="_blank">
						<span class="elementor-screen-only">Facebook-square</span>
						<svg aria-hidden="true" class="e-font-icon-svg e-fab-facebook-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-grow elementor-repeater-item-2042f4b" href="https://www.instagram.com/_the.diet.diary_/" target="_blank">
						<span class="elementor-screen-only">Instagram</span>
						<svg aria-hidden="true" class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>					</a>
				</span>
							<span class="elementor-grid-item" role="listitem">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-whatsapp elementor-animation-grow elementor-repeater-item-6bb3591" href="tel:+918469077410" target="_blank">
						<span class="elementor-screen-only">Whatsapp</span>
						<svg aria-hidden="true" class="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>					</a>
				</span>
					</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<div class="elementor-element elementor-element-7b90285 elementor-widget elementor-widget-text-editor" data-id="7b90285" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>@2025<span style="color: #045e04;"><a style="color: #045e04;" href="/"><span style="color: #ffffff;"> The Diet Diary</span>.</a></span> All Rights Reserved. Made with  <span style="color: #339966;">❤︎ </span> By The <strong><span style="color: #ffffff;"><a style="color: #ffffff;" href="https://13utopia.com/">13Utopia</a></span>.</strong></p>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
		</div>		</footer>
		</div><!-- #page -->
<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/astra/*","/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>

<div id="ast-scroll-top" tabindex="0" class="ast-scroll-top-icon ast-scroll-to-top-left" data-on-devices="desktop">
	<span class="ast-icon icon-arrow"><svg class="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewbox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve">
                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                </svg></span>	<span class="screen-reader-text">Scroll to Top</span>
</div>
		<div data-elementor-type="popup" data-elementor-id="1374" class="elementor elementor-1374 elementor-location-popup" data-elementor-settings="{&quot;entrance_animation&quot;:&quot;fadeInUp&quot;,&quot;entrance_animation_duration&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1.2,&quot;sizes&quot;:[]},&quot;a11y_navigation&quot;:&quot;yes&quot;,&quot;timing&quot;:[]}" data-elementor-post-type="elementor_library">
			<div class="elementor-element elementor-element-46b3f9a e-flex e-con-boxed e-con e-parent" data-id="46b3f9a" data-element_type="container" data-e-type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-2102484 elementor-widget elementor-widget-image" data-id="2102484" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img src="/website-images/Shivangi-Pancholi-dititian-1-1.png" title="" alt="" loading="lazy" />															</div>
				</div>
				<div class="elementor-element elementor-element-611786b elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="611786b" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
							<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://thedietdiary.in">

											<span class="elementor-icon-list-text">Home </span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/about/">

											<span class="elementor-icon-list-text">About </span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/blog/">

											<span class="elementor-icon-list-text">Blog</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/my-services/">

											<span class="elementor-icon-list-text">Services</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/programs/">

											<span class="elementor-icon-list-text">Programs</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="tel:918469077410">

											<span class="elementor-icon-list-text">Contact</span>
											</a>
									</li>
						</ul>
						</div>
				</div>
					</div>
				</div>
				</div>
		
<div class="joinchat joinchat--right" data-settings='{"telephone":"918469077410","mobile_only":false,"button_delay":3,"whatsapp_web":false,"qr":false,"message_views":2,"message_delay":-10,"message_badge":false,"message_send":"Hi ! I would like to know about your diet plans.","tracking_url":"https://thedietdiary.in/wp-json/joinchat/v1/track-click","message_hash":"11fcfb50"}' hidden aria-hidden="false">
	<div class="joinchat__button" role="button" tabindex="0" aria-label="💬 Need help? Open Chat">
									<div class="joinchat__tooltip" aria-hidden="true"><div>💬 Need help?</div></div>
			</div>
					<div class="joinchat__chatbox" role="dialog" aria-labelledby="joinchat__label" aria-modal="true">
			<div class="joinchat__header">
				<div id="joinchat__label">
											<svg class="joinchat__wa" width="120" height="28" viewBox="0 0 120 28"><title>WhatsApp</title><path d="M117.2 17c0 .4-.2.7-.4 1-.1.3-.4.5-.7.7l-1 .2c-.5 0-.9 0-1.2-.2l-.7-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1l.7-.7a2 2 0 0 1 1.1-.3 2 2 0 0 1 1.8 1l.4 1a5.3 5.3 0 0 1 0 2.3m2.5-3c-.1-.7-.4-1.3-.8-1.7a4 4 0 0 0-1.3-1.2c-.6-.3-1.3-.4-2-.4-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11H110v13h2.7v-4.5c.4.4.8.8 1.3 1 .5.3 1 .4 1.6.4a4 4 0 0 0 3.2-1.5c.4-.5.7-1 .8-1.6.2-.6.3-1.2.3-1.9s0-1.3-.3-2zm-13.1 3c0 .4-.2.7-.4 1l-.7.7-1.1.2c-.4 0-.8 0-1-.2-.4-.2-.6-.4-.8-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1 .1-.3.4-.5.7-.7a2 2 0 0 1 1-.3 2 2 0 0 1 1.9 1l.4 1a5.4 5.4 0 0 1 0 2.3m1.7-4.7a4 4 0 0 0-3.3-1.6c-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11h-2.6v13h2.7v-4.5c.3.4.7.8 1.2 1 .6.3 1.1.4 1.7.4a4 4 0 0 0 3.2-1.5c.4-.5.6-1 .8-1.6s.3-1.2.3-1.9-.1-1.3-.3-2c-.2-.6-.4-1.2-.8-1.6m-17.5 3.2 1.7-5 1.7 5zm.2-8.2-5 13.4h3l1-3h5l1 3h3L94 7.3zm-5.3 9.1-.6-.8-1-.5a11.6 11.6 0 0 0-2.3-.5l-1-.3a2 2 0 0 1-.6-.3.7.7 0 0 1-.3-.6c0-.2 0-.4.2-.5l.3-.3h.5l.5-.1c.5 0 .9 0 1.2.3.4.1.6.5.6 1h2.5c0-.6-.2-1.1-.4-1.5a3 3 0 0 0-1-1 4 4 0 0 0-1.3-.5 7.7 7.7 0 0 0-3 0c-.6.1-1 .3-1.4.5l-1 1a3 3 0 0 0-.4 1.5 2 2 0 0 0 1 1.8l1 .5 1.1.3 2.2.6c.6.2.8.5.8 1l-.1.5-.4.4a2 2 0 0 1-.6.2 2.8 2.8 0 0 1-1.4 0 2 2 0 0 1-.6-.3l-.5-.5-.2-.8H77c0 .7.2 1.2.5 1.6.2.5.6.8 1 1 .4.3.9.5 1.4.6a8 8 0 0 0 3.3 0c.5 0 1-.2 1.4-.5a3 3 0 0 0 1-1c.3-.5.4-1 .4-1.6 0-.5 0-.9-.3-1.2M74.7 8h-2.6v3h-1.7v1.7h1.7v5.8c0 .5 0 .9.2 1.2l.7.7 1 .3a7.8 7.8 0 0 0 2 0h.7v-2.1a3.4 3.4 0 0 1-.8 0l-1-.1-.2-1v-4.8h2V11h-2zm-7.6 9v.5l-.3.8-.7.6c-.2.2-.7.2-1.2.2h-.6l-.5-.2a1 1 0 0 1-.4-.4l-.1-.6.1-.6.4-.4.5-.3a4.8 4.8 0 0 1 1.2-.2 8 8 0 0 0 1.2-.2l.4-.3v1zm2.6 1.5v-5c0-.6 0-1.1-.3-1.5l-1-.8-1.4-.4a10.9 10.9 0 0 0-3.1 0l-1.5.6c-.4.2-.7.6-1 1a3 3 0 0 0-.5 1.5h2.7c0-.5.2-.9.5-1a2 2 0 0 1 1.3-.4h.6l.6.2.3.4.2.7c0 .3 0 .5-.3.6-.1.2-.4.3-.7.4l-1 .1a22 22 0 0 0-2.4.4l-1 .5c-.3.2-.6.5-.8.9-.2.3-.3.8-.3 1.3s.1 1 .3 1.3c.1.4.4.7.7 1l1 .4c.4.2.9.2 1.3.2a6 6 0 0 0 1.8-.2c.6-.2 1-.5 1.5-1a4 4 0 0 0 .2 1H70l-.3-1zm-11-6.7c-.2-.4-.6-.6-1-.8-.5-.2-1-.3-1.8-.3-.5 0-1 .1-1.5.4a3 3 0 0 0-1.3 1.2v-5h-2.7v13.4H53v-5.1c0-1 .2-1.7.5-2.2.3-.4.9-.6 1.6-.6.6 0 1 .2 1.3.6s.4 1 .4 1.8v5.5h2.7v-6c0-.6 0-1.2-.2-1.6 0-.5-.3-1-.5-1.3zm-14 4.7-2.3-9.2h-2.8l-2.3 9-2.2-9h-3l3.6 13.4h3l2.2-9.2 2.3 9.2h3l3.6-13.4h-3zm-24.5.2L18 15.6c-.3-.1-.6-.2-.8.2A20 20 0 0 1 16 17c-.2.2-.4.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2-2-2.4-.1-.4 0-.5.2-.7l.5-.6.4-.6v-.6L10.4 8c-.3-.6-.6-.5-.8-.6H9c-.2 0-.6.1-.9.5C7.8 8.2 7 9 7 10.7s1.3 3.4 1.4 3.6c.2.3 2.5 3.7 6 5.2l1.9.8c.8.2 1.6.2 2.2.1s2-.8 2.3-1.6c.3-.9.3-1.5.2-1.7l-.7-.4zM14 25.3c-2 0-4-.5-5.8-1.6l-.4-.2-4.4 1.1 1.2-4.2-.3-.5A11.5 11.5 0 0 1 22.1 5.7 11.5 11.5 0 0 1 14 25.3M14 0A13.8 13.8 0 0 0 2 20.7L0 28l7.3-2A13.8 13.8 0 1 0 14 0"/></svg>
									</div>
				<div class="joinchat__close" role="button" tabindex="0" aria-label="Close"></div>
			</div>
			<div class="joinchat__scroll">
				<div class="joinchat__content">
					<div class="joinchat__chat"><div class="joinchat__bubble">How can we help you?</div></div>
					<div class="joinchat__open" role="button" tabindex="0">
													<div class="joinchat__open__text">Open Chat</div>
												<svg class="joinchat__open__icon" width="60" height="60" viewbox="0 0 400 400">
							<path class="joinchat__pa" d="M168.83 200.504H79.218L33.04 44.284a1 1 0 0 1 1.386-1.188L365.083 199.04a1 1 0 0 1 .003 1.808L34.432 357.903a1 1 0 0 1-1.388-1.187l29.42-99.427"/>
							<path class="joinchat__pb" d="M318.087 318.087c-52.982 52.982-132.708 62.922-195.725 29.82l-80.449 10.18 10.358-80.112C18.956 214.905 28.836 134.99 81.913 81.913c65.218-65.217 170.956-65.217 236.174 0 42.661 42.661 57.416 102.661 44.265 157.316"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
					<a class="joinchat__powered" href="https://join.chat/en/powered/?utm_medium=widget&#038;utm_source=thedietdiary.in" target="_blank" rel="nofollow noopener">Powered by <span>Joinchat</span></a>
			</div>
			<script>
				( () => {
					const lazyloadRunObserver = () => {
						const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
						const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
							entries.forEach( ( entry ) => {
								if ( entry.isIntersecting ) {
									let lazyloadBackground = entry.target;
									if( lazyloadBackground ) {
										lazyloadBackground.classList.add( 'e-lazyloaded' );
									}
									lazyloadBackgroundObserver.unobserve( entry.target );
								}
							});
						}, { rootMargin: '200px 0px 200px 0px' } );
						lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
							lazyloadBackgroundObserver.observe( lazyloadBackground );
						} );
					};
					const events = [
						'DOMContentLoaded',
						'elementor/lazyload/observe',
					];
					events.forEach( ( event ) => {
						document.addEventListener( event, lazyloadRunObserver );
					} );
				} )();
			</script>
				<script>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	
<div id="photoswipe-fullscreen-dialog" class="pswp" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Full screen image">
	<div class="pswp__bg"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
				<button class="pswp__button pswp__button--fs" aria-label="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--share" aria-label="Share"></button>
				<button class="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" aria-label="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
<script type="text/template" id="tmpl-variation-template">
	<div class="woocommerce-variation-description">{{{ data.variation.variation_description }}}</div>
	<div class="woocommerce-variation-price">{{{ data.variation.price_html }}}</div>
	<div class="woocommerce-variation-availability">{{{ data.variation.availability_html }}}</div>
</script>
<script type="text/template" id="tmpl-unavailable-variation-template">
	<p role="alert">Sorry, this product is unavailable. Please choose a different combination.</p>
</script>
<link rel='stylesheet' id='widget-image-css' href="/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.2.4" media='all' />
<link rel='stylesheet' id='e-animation-grow-css' href="/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css?ver=4.2.4" media='all' />
<link rel='stylesheet' id='widget-social-icons-css' href="/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=4.2.4" media='all' />
<link rel='stylesheet' id='e-apple-webkit-css' href="/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=4.2.4" media='all' />
<link rel='stylesheet' id='elementor-post-1374-css' href="/wp-content/uploads/elementor/css/post-1374.css?ver=1789943316" media='all' />
<link rel='stylesheet' id='widget-icon-list-css' href="/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=4.2.4" media='all' />
<link rel='stylesheet' id='e-popup-css' href="/wp-content/plugins/elementor-pro/assets/css/conditionals/popup.min.css?ver=3.35.1" media='all' />
<link rel='stylesheet' id='photoswipe-css' href="/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css?ver=11.1.1" media='all' />
<link rel='stylesheet' id='photoswipe-default-skin-css' href="/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.min.css?ver=11.1.1" media='all' />
<script async data-wp-strategy="async" fetchpriority="low" id="comment-reply-js" src="https://thedietdiary.in/wp-includes/js/comment-reply.min.js?ver=7.1.1"></script>
<script id="astra-theme-js-js-extra">
var astra = {"break_point":"921","isRtl":"","is_scroll_to_id":"1","is_scroll_to_top":"1","is_header_footer_builder_active":"1","responsive_cart_click":"flyout","is_dark_palette":""};
//# sourceURL=astra-theme-js-js-extra
</script>
<script id="astra-theme-js-js" src="https://thedietdiary.in/wp-content/themes/astra/assets/js/minified/frontend.min.js?ver=4.13.12"></script>
<script id="fluentform-elementor-js-extra">
var fluentformElementor = {"adminUrl":"https://thedietdiary.in/wp-admin/admin.php"};
//# sourceURL=fluentform-elementor-js-extra
</script>
<script id="fluentform-elementor-js" src="https://thedietdiary.in/wp-content/plugins/fluentform/assets/js/fluent-forms-elementor-widget.js?ver=6.2.14"></script>
<script id="sp-real-swiper-js" src="https://thedietdiary.in/wp-content/plugins/testimonial-free/src/Frontend/assets/js/swiper.min.js?ver=4.0.0"></script>
<script id="sp-real-blocks-frontend-js-extra">
var sp_real_localize_data = {"ajaxUrl":"https://thedietdiary.in/wp-admin/admin-ajax.php","nonce":"4e8371e942"};
//# sourceURL=sp-real-blocks-frontend-js-extra
</script>
<script id="sp-real-blocks-frontend-js" src="https://thedietdiary.in/wp-content/plugins/testimonial-free/src/Blocks/assets/js/script.js?ver=4.0.0"></script>
<script id="elementor-webpack-runtime-js" src="https://thedietdiary.in/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=4.2.4"></script>
<script id="elementor-frontend-modules-js" src="https://thedietdiary.in/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=4.2.4"></script>
<script id="jquery-ui-core-js-before">
jQuery.uiBackCompat = true;
//# sourceURL=jquery-ui-core-js-before
</script>
<script id="jquery-ui-core-js" src="https://thedietdiary.in/wp-includes/js/jquery/ui/core.min.js?ver=1.14.2"></script>
<script id="elementor-frontend-js-extra">
var EAELImageMaskingConfig = {"svg_dir_url":"https://thedietdiary.in/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/img/image-masking/svg-shapes/"};
//# sourceURL=elementor-frontend-js-extra
</script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnX":"Share on X","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.2.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_panel_promotions":true,"theme_builder_v2":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_variables":true},"urls":{"assets":"https:\\/\\/thedietdiary.in\\/wp-content\\/plugins\\/elementor\\/assets\\/","ajaxurl":"https:\\/\\/thedietdiary.in\\/wp-admin\\/admin-ajax.php","uploadUrl":"https:\\/\\/thedietdiary.in\\/wp-content\\/uploads"},"nonces":{"floatingButtonsClickTracking":"0f35c11498","atomicFormsSendForm":"82da2aa1a8"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","woocommerce_notices_elements":[]},"post":{"id":855,"title":"How%20You%20Should%20Be%20Doing%20Oat%20Bran%20for%20Breakfast%20-","excerpt":"","featuredImage":"https:\\/\\/thedietdiary.in\\/wp-content\\/uploads\\/2025\\/02\\/3-768x1024.png"}};
//# sourceURL=elementor-frontend-js-before
</script>
<script id="elementor-frontend-js" src="https://thedietdiary.in/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=4.2.4"></script>
<script data-wp-strategy="defer" defer fetchpriority="low" id="joinchat-js" src="https://thedietdiary.in/wp-content/plugins/creame-whatsapp-me/public/js/joinchat.min.js?ver=6.3.2"></script>
<script id="sourcebuster-js-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=11.1.1"></script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"https://thedietdiary.in/wp-admin/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
//# sourceURL=wc-order-attribution-js-extra
</script>
<script id="wc-order-attribution-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=11.1.1"></script>
<script id="eael-general-js-extra">
var localize = {"ajaxurl":"https://thedietdiary.in/wp-admin/admin-ajax.php","nonce":"7073698358","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"https://thedietdiary.in/how-you-should-be-doing-oat-bran-for-breakfast/","cart_redirectition":"no","cart_page_url":"https://thedietdiary.in","el_breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
//# sourceURL=eael-general-js-extra
</script>
<script id="eael-general-js" src="https://thedietdiary.in/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js?ver=6.8.4"></script>
<script id="hfe-frontend-js-js" src="https://thedietdiary.in/wp-content/plugins/header-footer-elementor/inc/js/frontend.js?ver=2.9.4"></script>
<script id="elementor-pro-webpack-runtime-js" src="https://thedietdiary.in/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.35.1"></script>
<script id="wp-hooks-js" src="https://thedietdiary.in/wp-includes/js/dist/hooks.min.js?ver=f0f188028580e8dc1255"></script>
<script id="wp-i18n-js" src="https://thedietdiary.in/wp-includes/js/dist/i18n.min.js?ver=1dfe7db3940c23ea9216"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
</script>
<script id="elementor-pro-frontend-js-before">
var ElementorProFrontendConfig = {"ajaxurl":"https:\\/\\/thedietdiary.in\\/wp-admin\\/admin-ajax.php","nonce":"0df98d96e3","urls":{"assets":"https:\\/\\/thedietdiary.in\\/wp-content\\/plugins\\/elementor-pro\\/assets\\/","rest":"https:\\/\\/thedietdiary.in\\/wp-json\\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"woocommerce":{"menu_cart":{"cart_page_url":"https:\\/\\/thedietdiary.in","checkout_page_url":"https:\\/\\/thedietdiary.in","fragments_nonce":"94236dac20"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\\/\\/thedietdiary.in\\/wp-content\\/plugins\\/elementor-pro\\/modules\\/lottie\\/assets\\/animations\\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before
</script>
<script id="elementor-pro-frontend-js" src="https://thedietdiary.in/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.35.1"></script>
<script id="pro-elements-handlers-js" src="https://thedietdiary.in/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.35.1"></script>
<script data-wp-strategy="defer" defer id="wc-zoom-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js?ver=1.7.21-wc.11.1.1"></script>
<script data-wp-strategy="defer" defer id="wc-flexslider-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/flexslider/jquery.flexslider.min.js?ver=2.7.2-wc.11.1.1"></script>
<script data-wp-strategy="defer" defer id="wc-photoswipe-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1-wc.11.1.1"></script>
<script data-wp-strategy="defer" defer id="wc-photoswipe-ui-default-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1-wc.11.1.1"></script>
<script id="underscore-js" src="https://thedietdiary.in/wp-includes/js/underscore.min.js?ver=1.13.8"></script>
<script id="wp-util-js-extra">
var _wpUtilSettings = {"ajax":{"url":"/wp-admin/admin-ajax.php"}};
//# sourceURL=wp-util-js-extra
</script>
<script id="wp-util-js" src="https://thedietdiary.in/wp-includes/js/wp-util.min.js?ver=7.1.1"></script>
<script id="wc-add-to-cart-variation-js-extra">
var wc_add_to_cart_variation_params = {"wc_ajax_url":"/?wc-ajax=%%endpoint%%","i18n_no_matching_variations_text":"Sorry, no products matched your selection. Please choose a different combination.","i18n_make_a_selection_text":"Please select some product options before adding this product to your cart.","i18n_unavailable_text":"Sorry, this product is unavailable. Please choose a different combination.","i18n_reset_alert_text":"Your selection has been reset. Please select some product options before adding this product to your cart."};
//# sourceURL=wc-add-to-cart-variation-js-extra
</script>
<script data-wp-strategy="defer" defer id="wc-add-to-cart-variation-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=11.1.1"></script>
<script id="wc-single-product-js-extra">
var wc_single_product_params = {"i18n_required_rating_text":"Please select a rating","i18n_rating_options":["1 of 5 stars","2 of 5 stars","3 of 5 stars","4 of 5 stars","5 of 5 stars"],"i18n_product_gallery_trigger_text":"View full-screen image gallery","review_rating_required":"yes","flexslider":{"rtl":false,"animation":"slide","smoothHeight":true,"directionNav":false,"controlNav":"thumbnails","slideshow":false,"animationSpeed":500,"animationLoop":false,"allowOneSlide":false},"zoom_enabled":"1","zoom_options":[],"photoswipe_enabled":"1","photoswipe_options":{"shareEl":false,"closeOnScroll":false,"history":false,"hideAnimationDuration":0,"showAnimationDuration":0},"flexslider_enabled":"1"};
//# sourceURL=wc-single-product-js-extra
</script>
<script data-wp-strategy="defer" defer id="wc-single-product-js" src="https://thedietdiary.in/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=11.1.1"></script>
			<script>
			/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
			</script>
			<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://thedietdiary.in/wp-includes/js/wp-emoji-release.min.js?ver=7.1.1"}}
</script>
<script type="module">
/*! This file is auto-generated */
var e="script#wp-emoji-settings",t=document.querySelector(e);if(!(t instanceof HTMLScriptElement))throw new Error("Element missing: "+e);const r=JSON.parse(t.text),s=(window._wpemojiSettings=r,"wpEmojiSettingsSupports"),o=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(s,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const r=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===r[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,r){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!r(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,r){let a;const s=(a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),o=(s.textBaseline="top",s.font="600 32px Arial",{});return e.forEach(e=>{o[e]=t(s,e,n,r)}),o}function a(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}r.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(s));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(o),u.toString(),c.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"});const a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=e=>{i(n=e.data),a.terminate(),t(n)})}catch(e){}i(n=f(o,u,c,p))}t(n)}).then(e=>{for(const n in e)r.supports[n]=e[n],r.supports.everything=r.supports.everything&&r.supports[n],"flag"!==n&&(r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&r.supports[n]);var t;r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&!r.supports.flag,r.supports.everything||((t=r.source||{}).concatemoji?a(t.concatemoji):t.wpemoji&&t.twemoji&&(a(t.twemoji),a(t.wpemoji)))});
//# sourceURL=https://thedietdiary.in/wp-includes/js/wp-emoji-loader.min.js
</script>
<link rel='stylesheet' id='joinchat-css' href="/wp-content/plugins/creame-whatsapp-me/public/css/joinchat.min.css?ver=6.3.2" media='all' />
	`;
const pageInlineStyles = `
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */


:root{--ast-post-nav-space:0;--ast-container-default-xlg-padding:2.5em;--ast-container-default-lg-padding:2.5em;--ast-container-default-slg-padding:2em;--ast-container-default-md-padding:2.5em;--ast-container-default-sm-padding:2.5em;--ast-container-default-xs-padding:2.4em;--ast-container-default-xxs-padding:1.8em;--ast-code-block-background:#ECEFF3;--ast-comment-inputs-background:#F9FAFB;--ast-normal-container-width:1200px;--ast-narrow-container-width:750px;--ast-blog-title-font-weight:600;--ast-blog-meta-weight:600;--ast-global-color-primary:var(--ast-global-color-5);--ast-global-color-secondary:var(--ast-global-color-4);--ast-global-color-alternate-background:var(--ast-global-color-7);--ast-global-color-subtle-background:var(--ast-global-color-6);--ast-bg-style-guide:var( --ast-global-color-secondary,var(--ast-global-color-5) );--ast-shadow-style-guide:0px 0px 4px 0 #00000057;--ast-global-dark-bg-style:#fff;--ast-global-dark-lfs:#fbfbfb;--ast-widget-bg-color:#fafafa;--ast-wc-container-head-bg-color:#fbfbfb;--ast-title-layout-bg:#eeeeee;--ast-search-border-color:#e7e7e7;--ast-lifter-hover-bg:#e6e6e6;--ast-gallery-block-color:#000;--srfm-color-input-label:var(--ast-global-color-2);}html{font-size:100%;}a{color:#46896c;}a:hover,a:focus{color:#46896c;}body,button,input,select,textarea,.ast-button,.ast-custom-button{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:400;font-size:16px;font-size:1rem;line-height:var(--ast-body-line-height,1.65);}blockquote{color:#000000;}h1,h2,h3,h4,h5,h6,.entry-content :where(h1,h2,h3,h4,h5,h6),.site-title,.site-title a{font-weight:600;}.ast-site-identity .site-title a{color:var(--ast-global-color-2);}.site-title{font-size:26px;font-size:1.625rem;display:block;}header .custom-logo-link img{max-width:223px;width:223px;}.astra-logo-svg{width:223px;}.site-header .site-description{font-size:15px;font-size:0.9375rem;display:none;}.entry-title{font-size:20px;font-size:1.25rem;}.ast-blog-single-element.ast-taxonomy-container a{font-size:14px;font-size:0.875rem;}.ast-blog-meta-container{font-size:13px;font-size:0.8125rem;}.archive .ast-article-post .ast-article-inner,.blog .ast-article-post .ast-article-inner,.archive .ast-article-post .ast-article-inner:hover,.blog .ast-article-post .ast-article-inner:hover{border-top-left-radius:6px;border-top-right-radius:6px;border-bottom-right-radius:6px;border-bottom-left-radius:6px;overflow:hidden;}h1,.entry-content :where(h1){font-size:36px;font-size:2.25rem;font-weight:600;line-height:1.4em;}h2,.entry-content :where(h2){font-size:30px;font-size:1.875rem;font-weight:600;line-height:1.3em;}h3,.entry-content :where(h3){font-size:24px;font-size:1.5rem;font-weight:600;line-height:1.3em;}h4,.entry-content :where(h4){font-size:20px;font-size:1.25rem;line-height:1.2em;font-weight:600;}h5,.entry-content :where(h5){font-size:18px;font-size:1.125rem;line-height:1.2em;font-weight:600;}h6,.entry-content :where(h6){font-size:16px;font-size:1rem;line-height:1.25em;font-weight:600;}::selection{background-color:#46896c;color:#ffffff;}body,h1,h2,h3,h4,h5,h6,.entry-title a,.entry-content :where(h1,h2,h3,h4,h5,h6){color:#234337;}.tagcloud a:hover,.tagcloud a:focus,.tagcloud a.current-item{color:#ffffff;border-color:#46896c;background-color:#46896c;}input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,textarea:focus{border-color:#46896c;}input[type="radio"]:checked,input[type=reset],input[type="checkbox"]:checked,input[type="checkbox"]:hover:checked,input[type="checkbox"]:focus:checked,input[type=range]::-webkit-slider-thumb{border-color:#46896c;background-color:#46896c;box-shadow:none;}.site-footer a:hover + .post-count,.site-footer a:focus + .post-count{background:#46896c;border-color:#46896c;}.single .nav-links .nav-previous,.single .nav-links .nav-next{color:#46896c;}.entry-meta,.entry-meta *{line-height:1.45;color:#46896c;font-weight:600;}.entry-meta a:not(.ast-button):hover,.entry-meta a:not(.ast-button):hover *,.entry-meta a:not(.ast-button):focus,.entry-meta a:not(.ast-button):focus *,.page-links > .page-link,.page-links .page-link:hover,.post-navigation a:hover{color:#46896c;}#cat option,.secondary .calendar_wrap thead a,.secondary .calendar_wrap thead a:visited{color:#46896c;}.secondary .calendar_wrap #today,.ast-progress-val span{background:#46896c;}.secondary a:hover + .post-count,.secondary a:focus + .post-count{background:#46896c;border-color:#46896c;}.calendar_wrap #today > a{color:#ffffff;}.page-links .page-link,.single .post-navigation a{color:#234337;}.ast-search-menu-icon .search-form button.search-submit{padding:0 4px;}.ast-search-menu-icon form.search-form{padding-right:0;}.ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-form,.ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-field:focus{transition:all 0.2s;}.search-form input.search-field:focus{outline:none;}.ast-mobile-header-content .ast-builder-layout-element:not(.ast-builder-menu):not(.ast-header-divider-element),.ast-mobile-popup-content .ast-builder-layout-element:not(.ast-builder-menu):not(.ast-header-divider-element){padding:15px 20px;}.ast-search-menu-icon .search-form button.search-submit:focus,.ast-theme-transparent-header .ast-header-search .ast-dropdown-active .ast-icon,.ast-theme-transparent-header .ast-inline-search .search-field:focus .ast-icon{color:var(--ast-global-color-1);}.ast-desktop .ast-header-search .slide-search .search-form{border:2px solid var(--ast-global-color-0);}.ast-header-search .slide-search .search-field{background-color:var(--ast-global-dark-bg-style);}.ast-archive-title{color:#30644d;}.widget-title{font-size:22px;font-size:1.375rem;color:#30644d;}.ast-single-post .entry-content a,.ast-comment-content a:not(.ast-comment-edit-reply-wrap a),.woocommerce-js .woocommerce-product-details__short-description a{text-decoration:underline;}.ast-single-post .elementor-widget-button .elementor-button,.ast-single-post .entry-content .uagb-tab a,.ast-single-post .entry-content .uagb-ifb-cta a,.ast-single-post .entry-content .uabb-module-content a,.ast-single-post .entry-content .uagb-post-grid a,.ast-single-post .entry-content .uagb-timeline a,.ast-single-post .entry-content .uagb-toc__wrap a,.ast-single-post .entry-content .uagb-taxomony-box a,.ast-single-post .entry-content .woocommerce a,.entry-content .wp-block-latest-posts > li > a,.ast-single-post .entry-content .wp-block-file__button,a.ast-post-filter-single,.ast-single-post .ast-comment-content .comment-reply-link,.ast-single-post .ast-comment-content .comment-edit-link,.entry-content [CLASS*="wc-block"] .wc-block-components-button,.entry-content [CLASS*="wc-block"] .wc-block-components-totals-coupon-link,.entry-content [CLASS*="wc-block"] .wc-block-components-product-name{text-decoration:none;}.ast-search-menu-icon.slide-search a:focus-visible:focus-visible,.astra-search-icon:focus-visible,#close:focus-visible,a:focus-visible,.ast-menu-toggle:focus-visible,.site .skip-link:focus-visible,.wp-block-loginout input:focus-visible,.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,.ast-header-navigation-arrow:focus-visible,.woocommerce .wc-proceed-to-checkout > .checkout-button:focus-visible,.woocommerce .woocommerce-MyAccount-navigation ul li a:focus-visible,.ast-orders-table__row .ast-orders-table__cell:focus-visible,.woocommerce .woocommerce-order-details .order-again > .button:focus-visible,.woocommerce .woocommerce-message a.button.wc-forward:focus-visible,.woocommerce #minus_qty:focus-visible,.woocommerce #plus_qty:focus-visible,a#ast-apply-coupon:focus-visible,.woocommerce .woocommerce-info a:focus-visible,.woocommerce .astra-shop-summary-wrap a:focus-visible,.woocommerce a.wc-forward:focus-visible,#ast-apply-coupon:focus-visible,.woocommerce-js .woocommerce-mini-cart-item a.remove:focus-visible,#close:focus-visible,.button.search-submit:focus-visible,#search_submit:focus,.normal-search:focus-visible,.ast-header-account-wrap:focus-visible,.woocommerce .ast-on-card-button.ast-quick-view-trigger:focus,.astra-cart-drawer-close:focus,.ast-single-variation:focus,.ast-woocommerce-product-gallery__image:focus,.ast-button:focus,.woocommerce-product-gallery--with-images [data-controls="prev"]:focus-visible,.woocommerce-product-gallery--with-images [data-controls="next"]:focus-visible,.ast-builder-button-wrap:has(.ast-custom-button-link:focus),.ast-builder-button-wrap .ast-custom-button-link:focus{outline-style:dotted;outline-color:inherit;outline-width:thin;}input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,input[type="number"]:focus,textarea:focus,.wp-block-search__input:focus,[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-minimal:focus,.ast-mobile-popup-drawer.active .menu-toggle-close:focus,.woocommerce-ordering select.orderby:focus,#ast-scroll-top:focus,#coupon_code:focus,.woocommerce-page #comment:focus,.woocommerce #reviews #respond input#submit:focus,.woocommerce a.add_to_cart_button:focus,.woocommerce .button.single_add_to_cart_button:focus,.woocommerce .woocommerce-cart-form button:focus,.woocommerce .woocommerce-cart-form__cart-item .quantity .qty:focus,.woocommerce .woocommerce-billing-fields .woocommerce-billing-fields__field-wrapper .woocommerce-input-wrapper > .input-text:focus,.woocommerce #order_comments:focus,.woocommerce #place_order:focus,.woocommerce .woocommerce-address-fields .woocommerce-address-fields__field-wrapper .woocommerce-input-wrapper > .input-text:focus,.woocommerce .woocommerce-MyAccount-content form button:focus,.woocommerce .woocommerce-MyAccount-content .woocommerce-EditAccountForm .woocommerce-form-row .woocommerce-Input.input-text:focus,.woocommerce .ast-woocommerce-container .woocommerce-pagination ul.page-numbers li a:focus,body #content .woocommerce form .form-row .select2-container--default .select2-selection--single:focus,#ast-coupon-code:focus,.woocommerce.woocommerce-js .quantity input[type=number]:focus,.woocommerce-js .woocommerce-mini-cart-item .quantity input[type=number]:focus,.woocommerce p#ast-coupon-trigger:focus{border-style:dotted;border-color:inherit;border-width:thin;}input{outline:none;}.woocommerce-js input[type=text]:focus,.woocommerce-js input[type=email]:focus,.woocommerce-js textarea:focus,input[type=number]:focus,.comments-area textarea#comment:focus,.comments-area textarea#comment:active,.comments-area .ast-comment-formwrap input[type="text"]:focus,.comments-area .ast-comment-formwrap input[type="text"]:active{outline-style:unset;outline-color:inherit;outline-width:thin;}.ast-logo-title-inline .site-logo-img{padding-right:1em;}.site-logo-img img{ transition:all 0.2s linear;}body .ast-oembed-container *{position:absolute;top:0;width:100%;height:100%;left:0;}body .wp-block-embed-pocket-casts .ast-oembed-container *{position:unset;}.ast-single-post-featured-section + article {margin-top: 2em;}.site-content .ast-single-post-featured-section img {width: 100%;overflow: hidden;object-fit: cover;}.ast-separate-container .site-content .ast-single-post-featured-section + article {margin-top: -80px;z-index: 9;position: relative;border-radius: 4px;}@media (min-width: 922px) {.ast-no-sidebar .site-content .ast-article-image-container--wide {margin-left: -120px;margin-right: -120px;max-width: unset;width: unset;}.ast-left-sidebar .site-content .ast-article-image-container--wide,.ast-right-sidebar .site-content .ast-article-image-container--wide {margin-left: -10px;margin-right: -10px;}.site-content .ast-article-image-container--full {margin-left: calc( -50vw + 50%);margin-right: calc( -50vw + 50%);max-width: 100vw;width: 100vw;}.ast-left-sidebar .site-content .ast-article-image-container--full,.ast-right-sidebar .site-content .ast-article-image-container--full {margin-left: -10px;margin-right: -10px;max-width: inherit;width: auto;}}.site > .ast-single-related-posts-container {margin-top: 0;}@media (min-width: 922px) {.ast-desktop .ast-container--narrow {max-width: var(--ast-narrow-container-width);margin: 0 auto;}}input[type="text"],input[type="number"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type=reset],input[type=tel],input[type=date],select,textarea{font-size:16px;font-style:normal;font-weight:400;line-height:24px;width:100%;padding:12px 16px;border-radius:4px;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);color:var(--ast-form-input-text,#475569);}input[type="text"],input[type="number"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type=reset],input[type=tel],input[type=date],select{height:40px;}input[type="date"]{border-width:1px;border-style:solid;border-color:var(--ast-border-color);background:var( --ast-global-color-secondary,var(--ast-global-color-5) );}input[type="text"]:focus,input[type="number"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="search"]:focus,input[type=reset]:focus,input[type="tel"]:focus,input[type="date"]:focus,select:focus,textarea:focus{border-color:#046BD2;box-shadow:none;outline:none;color:var(--ast-form-input-focus-text,#475569);}label,legend{color:var(--ast-global-color-2,#111827 );font-size:14px;font-style:normal;font-weight:500;line-height:20px;}select{padding:6px 10px;}fieldset{padding:30px;border-radius:4px;}button,.ast-button,.button,input[type="button"],input[type="reset"],input[type="submit"]{border-radius:4px;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);}:root{--ast-comment-inputs-background:#FFF;}::placeholder{color:var(--ast-form-field-color,#9CA3AF);}::-ms-input-placeholder{color:var(--ast-form-field-color,#9CA3AF);}@media (max-width:921.99px){#ast-desktop-header{display:none;}}@media (min-width:922px){#ast-mobile-header{display:none;}}.wp-block-buttons.aligncenter{justify-content:center;}@media (max-width:921px){.ast-theme-transparent-header #primary,.ast-theme-transparent-header #secondary{padding:0;}}@media (max-width:921px){.ast-plain-container.ast-no-sidebar #primary{padding:0;}}.ast-plain-container.ast-no-sidebar #primary{margin-top:0;margin-bottom:0;}@media (min-width:1200px){.ast-plain-container.ast-no-sidebar #primary{margin-top:60px;margin-bottom:60px;}}.wp-block-button.is-style-outline .wp-block-button__link{border-color:#46896c;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;}div.wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color),div.wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color){color:#46896c;}.wp-block-button.is-style-outline .wp-block-button__link:hover,.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link:focus,.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color):hover,.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color):hover{color:#ffffff;background-color:#46896c;border-color:#46896c;}.post-page-numbers.current .page-link,.ast-pagination .page-numbers.current{color:#ffffff;border-color:#46896c;background-color:#46896c;}.wp-block-button.is-style-outline .wp-block-button__link{border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;}.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{border-color:#46896c;font-family:inherit;font-weight:500;font-size:16px;font-size:1rem;line-height:1em;padding-top:13px;padding-right:30px;padding-bottom:13px;padding-left:30px;}.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color),.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color),.ast-outline-button{color:#46896c;}.wp-block-button.is-style-outline .wp-block-button__link:hover,.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link:focus,.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color):hover,.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color):hover,.ast-outline-button:hover,.ast-outline-button:focus,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:hover,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:focus{color:#ffffff;background-color:#46896c;border-color:#46896c;}.ast-single-post .entry-content a.ast-outline-button,.ast-single-post .entry-content .is-style-outline>.wp-block-button__link{text-decoration:none;}.wp-block-button .wp-block-button__link.wp-element-button.is-style-outline:not(.has-background),.wp-block-button.is-style-outline>.wp-block-button__link.wp-element-button:not(.has-background),.ast-outline-button{background-color:transparent;}.uagb-buttons-repeater.ast-outline-button{border-radius:9999px;}@media (max-width:921px){.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{padding-top:12px;padding-right:28px;padding-bottom:12px;padding-left:28px;}}@media (max-width:544px){.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{padding-top:10px;padding-right:24px;padding-bottom:10px;padding-left:24px;}}.entry-content[data-ast-blocks-layout] > figure{margin-bottom:1em;}h1.widget-title{font-weight:600;}h2.widget-title{font-weight:600;}h3.widget-title{font-weight:600;}.elementor-widget-container .elementor-loop-container .e-loop-item[data-elementor-type="loop-item"]{width:100%;} .content-area .elementor-widget-theme-post-content h1,.content-area .elementor-widget-theme-post-content h2,.content-area .elementor-widget-theme-post-content h3,.content-area .elementor-widget-theme-post-content h4,.content-area .elementor-widget-theme-post-content h5,.content-area .elementor-widget-theme-post-content h6{margin-top:1.5em;margin-bottom:calc(0.3em + 10px);}.review-rating{display:flex;align-items:center;order:2;}#page{display:flex;flex-direction:column;min-height:100vh;}.ast-404-layout-1 h1.page-title{color:var(--ast-global-color-2);}.single .post-navigation a{line-height:1em;height:inherit;}.error-404 .page-sub-title{font-size:1.5rem;font-weight:inherit;}.search .site-content .content-area .search-form{margin-bottom:0;}#page .site-content{flex-grow:1;}.widget{margin-bottom:1.25em;}#secondary li{line-height:1.5em;}#secondary .wp-block-group h2{margin-bottom:0.7em;}#secondary h2{font-size:1.7rem;}.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .comment-respond{padding:2.5em;}.ast-separate-container .ast-article-single .ast-article-single{padding:0;}.ast-article-single .wp-block-post-template-is-layout-grid{padding-left:0;}.ast-separate-container .comments-title,.ast-narrow-container .comments-title{padding:1.5em 2em;}.ast-page-builder-template .comment-form-textarea,.ast-comment-formwrap .ast-grid-common-col{padding:0;}.ast-comment-formwrap{padding:0;display:inline-flex;column-gap:20px;width:100%;margin-left:0;margin-right:0;}.comments-area textarea#comment:focus,.comments-area textarea#comment:active,.comments-area .ast-comment-formwrap input[type="text"]:focus,.comments-area .ast-comment-formwrap input[type="text"]:active {box-shadow:none;outline:none;}.archive.ast-page-builder-template .entry-header{margin-top:2em;}.ast-page-builder-template .ast-comment-formwrap{width:100%;}.entry-title{margin-bottom:0.6em;}.ast-archive-description p{font-size:inherit;font-weight:inherit;line-height:inherit;}.ast-separate-container .ast-comment-list li.depth-1,.hentry{margin-bottom:1.5em;}.site-content section.ast-archive-description{margin-bottom:2em;}@media (min-width:921px){.ast-left-sidebar.ast-page-builder-template #secondary,.archive.ast-right-sidebar.ast-page-builder-template .site-main{padding-left:20px;padding-right:20px;}}@media (max-width:544px){.ast-comment-formwrap.ast-row{column-gap:10px;display:inline-block;}#ast-commentform .ast-grid-common-col{position:relative;width:100%;}}@media (min-width:1201px){.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .ast-author-box,.ast-separate-container .ast-404-layout-1,.ast-separate-container .no-results{padding:2.5em;}} .content-area .elementor-widget-theme-post-content h1,.content-area .elementor-widget-theme-post-content h2,.content-area .elementor-widget-theme-post-content h3,.content-area .elementor-widget-theme-post-content h4,.content-area .elementor-widget-theme-post-content h5,.content-area .elementor-widget-theme-post-content h6{margin-top:1.5em;margin-bottom:calc(0.3em + 10px);}.elementor-loop-container .e-loop-item,.elementor-loop-container .ast-separate-container .ast-article-post,.elementor-loop-container .ast-separate-container .ast-article-single,.elementor-loop-container .ast-separate-container .comment-respond{padding:0px;}@media (max-width:921px){.ast-left-sidebar #content > .ast-container{display:flex;flex-direction:column-reverse;width:100%;}}@media (min-width:922px){.ast-separate-container.ast-right-sidebar #primary,.ast-separate-container.ast-left-sidebar #primary{border:0;}.search-no-results.ast-separate-container #primary{margin-bottom:4em;}}.wp-block-button .wp-block-button__link{color:#46896c;}.wp-block-button .wp-block-button__link:hover,.wp-block-button .wp-block-button__link:focus{color:#ffffff;background-color:#46896c;border-color:#46896c;}.elementor-widget-heading h1.elementor-heading-title{line-height:1.4em;}.elementor-widget-heading h2.elementor-heading-title{line-height:1.3em;}.elementor-widget-heading h3.elementor-heading-title{line-height:1.3em;}.elementor-widget-heading h4.elementor-heading-title{line-height:1.2em;}.elementor-widget-heading h5.elementor-heading-title{line-height:1.2em;}.elementor-widget-heading h6.elementor-heading-title{line-height:1.25em;}.wp-block-button .wp-block-button__link,.wp-block-search .wp-block-search__button,body .wp-block-file .wp-block-file__button{border-style:solid;border-top-width:1px;border-right-width:1px;border-left-width:1px;border-bottom-width:1px;border-color:#46896c;background-color:transparent;color:#46896c;font-family:inherit;font-weight:500;line-height:1em;font-size:16px;font-size:1rem;border-top-left-radius:30px;border-top-right-radius:30px;border-bottom-right-radius:30px;border-bottom-left-radius:30px;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;}.ast-single-post .entry-content .wp-block-button .wp-block-button__link,.ast-single-post .entry-content .wp-block-search .wp-block-search__button,body .entry-content .wp-block-file .wp-block-file__button{text-decoration:none;}.menu-toggle,button,.ast-button,.ast-custom-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"],#comments .submit,.search .search-submit,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button,body .wp-block-file .wp-block-file__button,.search .search-submit,.woocommerce-js a.button,.woocommerce button.button,.woocommerce .woocommerce-message a.button,.woocommerce #respond input#submit.alt,.woocommerce input.button.alt,.woocommerce input.button,.woocommerce input.button:disabled,.woocommerce input.button:disabled[disabled],.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce #respond input#submit,.woocommerce button.button.alt.disabled,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link,.wc-block-grid__product-onsale,[CLASS*="wc-block"] button,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping),.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout,.woocommerce button.button.alt.disabled.wc-variation-selection-needed,[CLASS*="wc-block"] .wc-block-components-button{border-style:solid;border-top-width:1px;border-right-width:1px;border-left-width:1px;border-bottom-width:1px;color:#46896c;border-color:#46896c;background-color:transparent;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;font-family:inherit;font-weight:500;font-size:16px;font-size:1rem;line-height:1em;border-top-left-radius:30px;border-top-right-radius:30px;border-bottom-right-radius:30px;border-bottom-left-radius:30px;}button:focus,.menu-toggle:hover,button:hover,.ast-button:hover,.ast-custom-button:hover .button:hover,.ast-custom-button:hover ,input[type=reset]:hover,input[type=reset]:focus,input#submit:hover,input#submit:focus,input[type="button"]:hover,input[type="button"]:focus,input[type="submit"]:hover,input[type="submit"]:focus,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button:hover,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button:focus,body .wp-block-file .wp-block-file__button:hover,body .wp-block-file .wp-block-file__button:focus,.woocommerce-js a.button:hover,.woocommerce button.button:hover,.woocommerce .woocommerce-message a.button:hover,.woocommerce #respond input#submit:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce input.button.alt:hover,.woocommerce input.button:hover,.woocommerce button.button.alt.disabled:hover,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link:hover,[CLASS*="wc-block"] button:hover,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping):hover,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout:hover,.woocommerce button.button.alt.disabled.wc-variation-selection-needed:hover,[CLASS*="wc-block"] .wc-block-components-button:hover,[CLASS*="wc-block"] .wc-block-components-button:focus{color:#ffffff;background-color:#46896c;border-color:#46896c;}form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button.has-icon{padding-top:calc(10px - 3px);padding-right:calc(20px - 3px);padding-bottom:calc(10px - 3px);padding-left:calc(20px - 3px);}@media (max-width:921px){.ast-mobile-header-stack .main-header-bar .ast-search-menu-icon{display:inline-block;}.ast-header-break-point.ast-header-custom-item-outside .ast-mobile-header-stack .main-header-bar .ast-search-icon{margin:0;}.ast-comment-avatar-wrap img{max-width:2.5em;}.ast-comment-meta{padding:0 1.8888em 1.3333em;}}@media (min-width:544px){.ast-container{max-width:100%;}}@media (max-width:544px){.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .comments-title,.ast-separate-container .ast-archive-description{padding:1.5em 1em;}.ast-separate-container #content .ast-container{padding-left:0.54em;padding-right:0.54em;}.ast-separate-container .ast-comment-list .bypostauthor{padding:.5em;}.ast-search-menu-icon.ast-dropdown-active .search-field{width:170px;}} #ast-mobile-header .ast-site-header-cart-li a{pointer-events:none;}.ast-separate-container{background-color:#f1ead0;background-image:none;}@media (max-width:921px){.site-title{display:block;}.site-header .site-description{display:none;}h1,.entry-content :where(h1){font-size:30px;}h2,.entry-content :where(h2){font-size:25px;}h3,.entry-content :where(h3){font-size:20px;}}@media (max-width:544px){.site-title{display:none;}.site-header .site-description{display:none;}h1,.entry-content :where(h1){font-size:30px;}h2,.entry-content :where(h2){font-size:25px;}h3,.entry-content :where(h3){font-size:20px;}}@media (max-width:921px){html{font-size:91.2%;}}@media (max-width:544px){html{font-size:91.2%;}}@media (min-width:922px){.ast-container{max-width:1240px;}}@media (min-width:922px){.site-content .ast-container{display:flex;}}@media (max-width:921px){.site-content .ast-container{flex-direction:column;}}@media (min-width:922px){.single-post .site-content > .ast-container{max-width:1674px;}}.entry-content :where(h1,h2,h3,h4,h5,h6){clear:none;}@media (min-width:922px){.main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu:hover > .sub-menu,.main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu.focus > .sub-menu{margin-left:-0px;}}.entry-content li > p{margin-bottom:0;}.wp-block-file {display: flex;align-items: center;flex-wrap: wrap;justify-content: space-between;}.wp-block-pullquote {border: none;}.wp-block-pullquote blockquote::before {content: "\\201D";font-family: "Helvetica",sans-serif;display: flex;transform: rotate( 180deg );font-size: 6rem;font-style: normal;line-height: 1;font-weight: bold;align-items: center;justify-content: center;}.has-text-align-right > blockquote::before {justify-content: flex-start;}.has-text-align-left > blockquote::before {justify-content: flex-end;}figure.wp-block-pullquote.is-style-solid-color blockquote {max-width: 100%;text-align: inherit;}:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 3em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 3em;--wp--custom--ast-container-width: 1200px;--wp--custom--ast-content-width-size: 1200px;--wp--custom--ast-wide-width-size: calc(1200px + var(--wp--custom--ast-default-block-left-padding) + var(--wp--custom--ast-default-block-right-padding));}.ast-narrow-container {--wp--custom--ast-content-width-size: 750px;--wp--custom--ast-wide-width-size: 750px;}@media(max-width: 921px) {:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 2em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 2em;}}@media(max-width: 544px) {:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 1.5em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 1.5em;}}.entry-content > .wp-block-group,.entry-content > .wp-block-cover,.entry-content > .wp-block-columns {padding-top: var(--wp--custom--ast-default-block-top-padding);padding-right: var(--wp--custom--ast-default-block-right-padding);padding-bottom: var(--wp--custom--ast-default-block-bottom-padding);padding-left: var(--wp--custom--ast-default-block-left-padding);}.ast-plain-container.ast-no-sidebar .entry-content > .alignfull,.ast-page-builder-template .ast-no-sidebar .entry-content > .alignfull {margin-left: calc( -50vw + 50%);margin-right: calc( -50vw + 50%);max-width: 100vw;width: 100vw;}.ast-plain-container.ast-no-sidebar .entry-content .alignfull .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .alignfull .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .alignfull .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .alignfull .alignwide,.ast-plain-container.ast-no-sidebar .entry-content .alignwide .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .alignwide .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .alignwide .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .alignwide .alignwide,.ast-plain-container.ast-no-sidebar .entry-content .wp-block-column .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .wp-block-column .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .wp-block-column .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .wp-block-column .alignwide {margin-left: auto;margin-right: auto;width: 100%;}[data-ast-blocks-layout] .wp-block-separator:not(.is-style-dots) {height: 0;}[data-ast-blocks-layout] .wp-block-separator {margin: 20px auto;}[data-ast-blocks-layout] .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {max-width: 100px;}[data-ast-blocks-layout] .wp-block-separator.has-background {padding: 0;}.entry-content[data-ast-blocks-layout] > * {max-width: var(--wp--custom--ast-content-width-size);margin-left: auto;margin-right: auto;}.entry-content[data-ast-blocks-layout] > .alignwide {max-width: var(--wp--custom--ast-wide-width-size);}.entry-content[data-ast-blocks-layout] .alignfull {max-width: none;}.entry-content .wp-block-columns {margin-bottom: 0;}blockquote {margin: 1.5em;border-color: rgba(0,0,0,0.05);}.wp-block-quote:not(.has-text-align-right):not(.has-text-align-center) {border-left: 5px solid rgba(0,0,0,0.05);}.has-text-align-right > blockquote,blockquote.has-text-align-right {border-right: 5px solid rgba(0,0,0,0.05);}.has-text-align-left > blockquote,blockquote.has-text-align-left {border-left: 5px solid rgba(0,0,0,0.05);}.wp-block-site-tagline,.wp-block-latest-posts .read-more {margin-top: 15px;}.wp-block-loginout p label {display: block;}.wp-block-loginout p:not(.login-remember):not(.login-submit) input {width: 100%;}.wp-block-loginout input:focus {border-color: transparent;}.wp-block-loginout input:focus {outline: thin dotted;}.entry-content .wp-block-media-text .wp-block-media-text__content {padding: 0 0 0 8%;}.entry-content .wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {padding: 0 8% 0 0;}.entry-content .wp-block-media-text.has-background .wp-block-media-text__content {padding: 8%;}.entry-content .wp-block-cover:not([class*="background-color"]):not(.has-text-color.has-link-color) .wp-block-cover__inner-container,.entry-content .wp-block-cover:not([class*="background-color"]) .wp-block-cover-image-text,.entry-content .wp-block-cover:not([class*="background-color"]) .wp-block-cover-text,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover__inner-container,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover-image-text,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover-text {color: var(--ast-global-color-primary,var(--ast-global-color-5));}.wp-block-loginout .login-remember input {width: 1.1rem;height: 1.1rem;margin: 0 5px 4px 0;vertical-align: middle;}.wp-block-latest-posts > li > *:first-child,.wp-block-latest-posts:not(.is-grid) > li:first-child {margin-top: 0;}.entry-content > .wp-block-buttons,.entry-content > .wp-block-uagb-buttons {margin-bottom: 1.5em;}.wp-block-search__inside-wrapper .wp-block-search__input {padding: 0 10px;color: var(--ast-global-color-3);background: var(--ast-global-color-primary,var(--ast-global-color-5));border-color: var(--ast-border-color);}.wp-block-latest-posts .read-more {margin-bottom: 1.5em;}.wp-block-search__no-button .wp-block-search__inside-wrapper .wp-block-search__input {padding-top: 5px;padding-bottom: 5px;}.wp-block-latest-posts .wp-block-latest-posts__post-date,.wp-block-latest-posts .wp-block-latest-posts__post-author {font-size: 1rem;}.wp-block-latest-posts > li > *,.wp-block-latest-posts:not(.is-grid) > li {margin-top: 12px;margin-bottom: 12px;}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .alignwide:where(:not(.uagb-is-root-container):not(.spectra-is-root-container)) > * {max-width: var(--wp--custom--ast-wide-width-size);}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .inherit-container-width > *,.ast-page-builder-template .entry-content[data-ast-blocks-layout] > *:not(.wp-block-group):where(:not(.uagb-is-root-container):not(.spectra-is-root-container)) > *,.entry-content[data-ast-blocks-layout] > .wp-block-cover .wp-block-cover__inner-container {max-width: var(--wp--custom--ast-content-width-size) ;margin-left: auto;margin-right: auto;}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > *,.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .alignfull:where(:not(.wp-block-group):not(.uagb-is-root-container):not(.spectra-is-root-container)) > * {max-width: none;}.entry-content[data-ast-blocks-layout] .wp-block-cover:not(.alignleft):not(.alignright) {width: auto;}@media(max-width: 1200px) {.ast-separate-container .entry-content > .alignfull,.ast-separate-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content .alignfull {margin-left: calc(-1 * min(var(--ast-container-default-xlg-padding),20px)) ;margin-right: calc(-1 * min(var(--ast-container-default-xlg-padding),20px));}}@media(min-width: 1201px) {.ast-separate-container .entry-content > .alignfull {margin-left: calc(-1 * var(--ast-container-default-xlg-padding) );margin-right: calc(-1 * var(--ast-container-default-xlg-padding) );}.ast-separate-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content[data-ast-blocks-layout] > .alignwide {margin-left: calc(-1 * var(--wp--custom--ast-default-block-left-padding) );margin-right: calc(-1 * var(--wp--custom--ast-default-block-right-padding) );}}@media(min-width: 921px) {.ast-separate-container .entry-content .wp-block-group.alignwide:not(.inherit-container-width) > :where(:not(.alignleft):not(.alignright)),.ast-plain-container .entry-content .wp-block-group.alignwide:not(.inherit-container-width) > :where(:not(.alignleft):not(.alignright)) {max-width: calc( var(--wp--custom--ast-content-width-size) + 80px );}.ast-plain-container.ast-right-sidebar .entry-content[data-ast-blocks-layout] .alignfull,.ast-plain-container.ast-left-sidebar .entry-content[data-ast-blocks-layout] .alignfull {margin-left: -60px;margin-right: -60px;}}@media(min-width: 544px) {.entry-content > .alignleft {margin-right: 20px;}.entry-content > .alignright {margin-left: 20px;}}@media (max-width:544px){.wp-block-columns .wp-block-column:not(:last-child){margin-bottom:20px;}.wp-block-latest-posts{margin:0;}}@media( max-width: 600px ) {.entry-content .wp-block-media-text .wp-block-media-text__content,.entry-content .wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {padding: 8% 0 0;}.entry-content .wp-block-media-text.has-background .wp-block-media-text__content {padding: 8%;}}.ast-page-builder-template .entry-header {padding-left: 0;}.ast-narrow-container .site-content .wp-block-uagb-image--align-full .wp-block-uagb-image__figure {max-width: 100%;margin-left: auto;margin-right: auto;}.entry-content ul,.entry-content ol {padding: revert;margin: revert;padding-left: 20px;}.entry-content ul.wc-block-product-template{padding: 0;}:root .has-ast-global-color-0-color{color:var(--ast-global-color-0);}:root .has-ast-global-color-0-background-color{background-color:var(--ast-global-color-0);}:root .wp-block-button .has-ast-global-color-0-color{color:var(--ast-global-color-0);}:root .wp-block-button .has-ast-global-color-0-background-color{background-color:var(--ast-global-color-0);}:root .has-ast-global-color-1-color{color:var(--ast-global-color-1);}:root .has-ast-global-color-1-background-color{background-color:var(--ast-global-color-1);}:root .wp-block-button .has-ast-global-color-1-color{color:var(--ast-global-color-1);}:root .wp-block-button .has-ast-global-color-1-background-color{background-color:var(--ast-global-color-1);}:root .has-ast-global-color-2-color{color:var(--ast-global-color-2);}:root .has-ast-global-color-2-background-color{background-color:var(--ast-global-color-2);}:root .wp-block-button .has-ast-global-color-2-color{color:var(--ast-global-color-2);}:root .wp-block-button .has-ast-global-color-2-background-color{background-color:var(--ast-global-color-2);}:root .has-ast-global-color-3-color{color:var(--ast-global-color-3);}:root .has-ast-global-color-3-background-color{background-color:var(--ast-global-color-3);}:root .wp-block-button .has-ast-global-color-3-color{color:var(--ast-global-color-3);}:root .wp-block-button .has-ast-global-color-3-background-color{background-color:var(--ast-global-color-3);}:root .has-ast-global-color-4-color{color:var(--ast-global-color-4);}:root .has-ast-global-color-4-background-color{background-color:var(--ast-global-color-4);}:root .wp-block-button .has-ast-global-color-4-color{color:var(--ast-global-color-4);}:root .wp-block-button .has-ast-global-color-4-background-color{background-color:var(--ast-global-color-4);}:root .has-ast-global-color-5-color{color:var(--ast-global-color-5);}:root .has-ast-global-color-5-background-color{background-color:var(--ast-global-color-5);}:root .wp-block-button .has-ast-global-color-5-color{color:var(--ast-global-color-5);}:root .wp-block-button .has-ast-global-color-5-background-color{background-color:var(--ast-global-color-5);}:root .has-ast-global-color-6-color{color:var(--ast-global-color-6);}:root .has-ast-global-color-6-background-color{background-color:var(--ast-global-color-6);}:root .wp-block-button .has-ast-global-color-6-color{color:var(--ast-global-color-6);}:root .wp-block-button .has-ast-global-color-6-background-color{background-color:var(--ast-global-color-6);}:root .has-ast-global-color-7-color{color:var(--ast-global-color-7);}:root .has-ast-global-color-7-background-color{background-color:var(--ast-global-color-7);}:root .wp-block-button .has-ast-global-color-7-color{color:var(--ast-global-color-7);}:root .wp-block-button .has-ast-global-color-7-background-color{background-color:var(--ast-global-color-7);}:root .has-ast-global-color-8-color{color:var(--ast-global-color-8);}:root .has-ast-global-color-8-background-color{background-color:var(--ast-global-color-8);}:root .wp-block-button .has-ast-global-color-8-color{color:var(--ast-global-color-8);}:root .wp-block-button .has-ast-global-color-8-background-color{background-color:var(--ast-global-color-8);}:root{--ast-global-color-0:#46896c;--ast-global-color-1:#30624e;--ast-global-color-2:#1b4031;--ast-global-color-3:#1c3c2e;--ast-global-color-4:#F0F5FA;--ast-global-color-5:#FFFFFF;--ast-global-color-6:#D1D5DB;--ast-global-color-7:#111111;--ast-global-color-8:#111111;}:root {--ast-border-color : var(--ast-global-color-6);}.ast-archive-entry-banner {-js-display: flex;display: flex;flex-direction: column;justify-content: center;text-align: center;position: relative;background: var(--ast-title-layout-bg);}.ast-archive-entry-banner[data-banner-width-type="custom"] {margin: 0 auto;width: 100%;}.ast-archive-entry-banner[data-banner-layout="layout-1"] {background: inherit;padding: 20px 0;text-align: left;}body.archive .ast-archive-description{max-width:1200px;width:100%;text-align:left;padding-top:3em;padding-right:3em;padding-bottom:3em;padding-left:3em;}body.archive .ast-archive-description .ast-archive-title,body.archive .ast-archive-description .ast-archive-title *{font-weight:600;font-size:32px;font-size:2rem;}body.archive .ast-archive-description > *:not(:last-child){margin-bottom:10px;}@media (max-width:921px){body.archive .ast-archive-description{text-align:left;}}@media (max-width:544px){body.archive .ast-archive-description{text-align:left;}}.ast-breadcrumbs .trail-browse,.ast-breadcrumbs .trail-items,.ast-breadcrumbs .trail-items li{display:inline-block;margin:0;padding:0;border:none;background:inherit;text-indent:0;text-decoration:none;}.ast-breadcrumbs .trail-browse{font-size:inherit;font-style:inherit;font-weight:inherit;color:inherit;}.ast-breadcrumbs .trail-items{list-style:none;}.trail-items li::after{padding:0 0.3em;content:"\\00bb";}.trail-items li:last-of-type::after{display:none;}h1,h2,h3,h4,h5,h6,.entry-content :where(h1,h2,h3,h4,h5,h6){color:#30644d;}.entry-title a{color:#30644d;}@media (max-width:921px){.ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-firstrow .ast-builder-grid-row > *:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-lastrow .ast-builder-grid-row > *:last-child{grid-column:1 / -1;}}@media (max-width:544px){.ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-firstrow .ast-builder-grid-row > *:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-lastrow .ast-builder-grid-row > *:last-child{grid-column:1 / -1;}}.ast-builder-layout-element[data-section="title_tagline"]{display:flex;}@media (max-width:921.99px){.ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"]{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"]{display:flex;}}.ast-builder-menu-1{font-family:inherit;font-weight:inherit;}.ast-builder-menu-1 .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-1 .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-1 .menu-link:hover,.ast-builder-menu-1 .main-header-menu > .menu-item:hover > .menu-link,.ast-builder-menu-1 .inline-on-mobile .ast-menu-toggle:hover,.ast-builder-menu-1 .inline-on-mobile .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .ast-menu-toggle:hover,.ast-builder-menu-1 .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .menu-item.current-menu-item > .menu-link,.ast-builder-menu-1 .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle,.ast-builder-menu-1 .current-menu-ancestor > .menu-link{color:var(--ast-global-color-1);}.ast-builder-menu-1 .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .sub-menu,.ast-builder-menu-1 .inline-on-mobile .sub-menu{border-top-width:2px;border-bottom-width:0px;border-right-width:0px;border-left-width:0px;border-color:#46896c;border-style:solid;}.ast-builder-menu-1 .sub-menu .sub-menu{top:-2px;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0px;}.ast-desktop .ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu:before,.ast-desktop .ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper:before{height:calc( 0px + 2px + 5px );}.ast-desktop .ast-builder-menu-1 .menu-item .sub-menu .menu-link{border-style:none;}@media (max-width:921px){.ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-1 .inline-on-mobile .menu-item.menu-item-has-children > .ast-menu-toggle{right:-15px;}.ast-builder-menu-1 .menu-item-has-children > .menu-link:after{content:unset;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0;}}.ast-builder-menu-1{display:flex;}@media (max-width:921.99px){.ast-header-break-point .ast-builder-menu-1{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-1{display:flex;}}.site-below-footer-wrap{padding-top:20px;padding-bottom:20px;}.site-below-footer-wrap[data-section="section-below-footer-builder"]{background-color:var(--ast-global-color-5);background-image:none;min-height:60px;border-style:solid;border-width:0px;border-top-width:1px;border-top-color:var( --ast-global-color-subtle-background,var(--ast-global-color-7) );}.site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row{max-width:1200px;min-height:60px;margin-left:auto;margin-right:auto;}.site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row,.site-below-footer-wrap[data-section="section-below-footer-builder"] .site-footer-section{align-items:center;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-inline .site-footer-section{display:flex;margin-bottom:0;}.ast-builder-grid-row-full .ast-builder-grid-row{grid-template-columns:1fr;}@media (max-width:921px){.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-inline .site-footer-section{display:flex;margin-bottom:0;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-stack .site-footer-section{display:block;margin-bottom:10px;}.ast-builder-grid-row-container.ast-builder-grid-row-tablet-full .ast-builder-grid-row{grid-template-columns:1fr;}}@media (max-width:544px){.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-inline .site-footer-section{display:flex;margin-bottom:0;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-stack .site-footer-section{display:block;margin-bottom:10px;}.ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row{grid-template-columns:1fr;}}.site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}@media (max-width:921.99px){.ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}}@media (max-width:544px){.ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}}.ast-footer-copyright{text-align:center;}.ast-footer-copyright.site-footer-focus-item {color:var(--ast-global-color-3);}@media (max-width:921px){.ast-footer-copyright{text-align:center;}}@media (max-width:544px){.ast-footer-copyright{text-align:center;}}.ast-footer-copyright.site-footer-focus-item {font-size:16px;font-size:1rem;}.ast-footer-copyright.ast-builder-layout-element{display:flex;}@media (max-width:921.99px){.ast-header-break-point .ast-footer-copyright.ast-builder-layout-element{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-footer-copyright.ast-builder-layout-element{display:flex;}}.footer-widget-area.widget-area.site-footer-focus-item{width:auto;}.ast-footer-row-inline .footer-widget-area.widget-area.site-footer-focus-item{width:100%;}.elementor-widget-heading .elementor-heading-title{margin:0;}.elementor-page .ast-menu-toggle{color:unset;background:unset;}.elementor-post.elementor-grid-item.hentry{margin-bottom:0;}.woocommerce div.product .elementor-element.elementor-products-grid .related.products ul.products li.product,.elementor-element .elementor-wc-products .woocommerce[class*='columns-'] ul.products li.product{width:auto;margin:0;float:none;}.elementor-toc__list-wrapper{margin:0;}body .elementor hr{background-color:#ccc;margin:0;}.ast-left-sidebar .elementor-section.elementor-section-stretched,.ast-right-sidebar .elementor-section.elementor-section-stretched{max-width:100%;left:0 !important;}.elementor-posts-container [CLASS*="ast-width-"]{width:100%;}.elementor-template-full-width .ast-container{display:block;}.elementor-screen-only,.screen-reader-text,.screen-reader-text span,.ui-helper-hidden-accessible{top:0 !important;}@media (max-width:544px){.elementor-element .elementor-wc-products .woocommerce[class*="columns-"] ul.products li.product{width:auto;margin:0;}.elementor-element .woocommerce .woocommerce-result-count{float:none;}}.ast-header-break-point .main-header-bar{border-bottom-width:1px;}@media (min-width:922px){.main-header-bar{border-bottom-width:1px;}}.main-header-menu .menu-item, #astra-footer-menu .menu-item, .main-header-bar .ast-masthead-custom-menu-items{-js-display:flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}.main-header-menu > .menu-item > .menu-link, #astra-footer-menu > .menu-item > .menu-link{height:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-js-display:flex;display:flex;}#ast-desktop-header .main-header-menu > .menu-item.menu-item-has-children > .menu-link .ast-header-navigation-arrow{padding-right:10px;margin-right:-10px;}.ast-header-break-point .main-navigation ul .menu-item .menu-link .icon-arrow:first-of-type svg{top:.2em;margin-top:0px;margin-left:0px;width:.65em;transform:translate(0, -2px) rotateZ(270deg);}.ast-mobile-popup-content .ast-submenu-expanded > .ast-menu-toggle{transform:rotateX(180deg);overflow-y:auto;}@media (min-width:922px){.ast-builder-menu .main-navigation > ul > li:last-child a{margin-right:0;}}.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-5);background-image:none;}@media (max-width:921px){.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-5);background-image:none;}}@media (max-width:544px){.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-5);background-image:none;}}.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper, .ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content, .ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description, .ast-separate-container .comments-area{background-color:var(--ast-global-color-5);background-image:none;}@media (max-width:921px){.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper, .ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content, .ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description{background-color:var(--ast-global-color-5);background-image:none;}}@media (max-width:544px){.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper, .ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content, .ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description{background-color:var(--ast-global-color-5);background-image:none;}}.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-5);background-image:none;}@media (max-width:921px){.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-5);background-image:none;}}@media (max-width:544px){.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-5);background-image:none;}}.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-5);background-image:none;}@media (max-width:921px){.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-5);background-image:none;}}@media (max-width:544px){.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-5);background-image:none;}}
		.ast-related-post-title, .entry-meta * {
			word-break: break-word;
		}
		.ast-related-post-cta.read-more .ast-related-post-link {
			text-decoration: none;
		}
		.ast-page-builder-template .ast-related-post .entry-header, .ast-related-post-content .entry-header, .ast-related-post-content .entry-meta {
			margin: 1em auto 1em auto;
			padding: 0;
		}
		.ast-related-posts-wrapper {
			display: grid;
			grid-column-gap: 25px;
			grid-row-gap: 25px;
		}
		.ast-related-posts-wrapper .ast-related-post, .ast-related-post-featured-section {
			padding: 0;
			margin: 0;
			width: 100%;
			position: relative;
		}
		.ast-related-posts-inner-section {
			height: 100%;
		}
		.post-has-thumb + .entry-header, .post-has-thumb + .entry-content {
			margin-top: 1em;
		}
		.ast-related-post-content .entry-meta {
			margin-top: 0.5em;
		}
		.ast-related-posts-inner-section .post-thumb-img-content {
			margin: 0;
			position: relative;
		}
		
				.ast-single-related-posts-container {
					border-top: 1px solid var(--ast-single-post-border, var(--ast-border-color));
				}
				.ast-separate-container .ast-single-related-posts-container {
					border-top: 0;
				}
				.ast-single-related-posts-container {
					padding-top: 2em;
				}
				.ast-related-posts-title-section {
					padding-bottom: 20px;
				}
				.ast-page-builder-template .ast-single-related-posts-container {
					margin-top: 0;
					padding-left: 20px;
					padding-right: 20px;
				}
				@media (max-width: 544px) {
					.ast-related-posts-title-section {
						padding-bottom: 1.5em;
					}
				}
			.ast-single-related-posts-container .ast-related-posts-wrapper{grid-template-columns:repeat( 2, 1fr );}.ast-related-posts-inner-section .ast-date-meta .posted-on, .ast-related-posts-inner-section .ast-date-meta .posted-on *{background:#46896c;color:#ffffff;}.ast-related-posts-inner-section .ast-date-meta .posted-on .date-month, .ast-related-posts-inner-section .ast-date-meta .posted-on .date-year{color:#ffffff;}.ast-single-related-posts-container{background-color:var(--ast-global-color-5);background-image:none;}.ast-related-posts-title{color:var(--ast-global-color-2);font-size:26px;font-size:1.625rem;line-height:1.6em;}.ast-related-posts-title-section .ast-related-posts-title{text-align:left;}.ast-related-post-content .entry-header .ast-related-post-title, .ast-related-post-content .entry-header .ast-related-post-title a{color:var(--ast-global-color-2);font-weight:500;font-size:20px;font-size:1.25rem;line-height:1.5em;}.ast-related-post-content .entry-meta, .ast-related-post-content .entry-meta *{font-size:14px;font-size:0.875rem;line-height:1.6em;}.ast-related-post-excerpt{color:var(--ast-global-color-2);}.ast-related-cat-style--badge .cat-links > a, .ast-related-tag-style--badge .tags-links > a{border-style:solid;border-top-width:1px;border-right-width:1px;border-left-width:1px;border-bottom-width:1px;padding:4px 8px;border-radius:3px;font-size:inherit;color:#46896c;border-color:#46896c;background-color:transparent;}.ast-related-cat-style--badge .cat-links > a:hover, .ast-related-tag-style--badge .tags-links > a:hover{color:#fff;background-color:#46896c;border-color:#46896c;}.ast-related-cat-style--underline .cat-links > a, .ast-related-tag-style--underline .tags-links > a{text-decoration:underline;}@media (max-width:921px){.ast-single-related-posts-container .ast-related-posts-wrapper .ast-related-post{width:100%;}.ast-single-related-posts-container .ast-related-posts-wrapper{grid-template-columns:repeat( 2, 1fr );}.ast-single-related-posts-container{background-color:var(--ast-global-color-5);background-image:none;}}@media (max-width:544px){.ast-single-related-posts-container .ast-related-posts-wrapper{grid-template-columns:1fr;}.ast-single-related-posts-container{background-color:var(--ast-global-color-5);background-image:none;}}.site .ast-single-related-posts-container{padding-top:2.5em;padding-bottom:2.5em;padding-left:2.5em;padding-right:2.5em;margin-top:2em;}
		#ast-scroll-top {
			display: none;
			position: fixed;
			text-align: center;
			cursor: pointer;
			z-index: 99;
			width: 2.1em;
			height: 2.1em;
			line-height: 2.1;
			color: #ffffff;
			border-radius: 2px;
			content: "";
			outline: inherit;
		}
		@media (min-width: 769px) {
			#ast-scroll-top {
				content: "769";
			}
		}
		#ast-scroll-top .ast-icon.icon-arrow svg {
			margin-left: 0px;
			vertical-align: middle;
			transform: translate(0, -20%) rotate(180deg);
			width: 1.6em;
		}
		.ast-scroll-to-top-right {
			right: 30px;
			bottom: 30px;
		}
		.ast-scroll-to-top-left {
			left: 30px;
			bottom: 30px;
		}
	#ast-scroll-top{background-color:#46896c;font-size:15px;border-top-left-radius:25px;border-top-right-radius:25px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;}@media (max-width:921px){#ast-scroll-top .ast-icon.icon-arrow svg{width:1em;}}.ast-mobile-header-content > *,.ast-desktop-header-content > * {padding: 10px 0;height: auto;}.ast-mobile-header-content > *:first-child,.ast-desktop-header-content > *:first-child {padding-top: 10px;}.ast-mobile-header-content > .ast-builder-menu,.ast-desktop-header-content > .ast-builder-menu {padding-top: 0;}.ast-mobile-header-content > *:last-child,.ast-desktop-header-content > *:last-child {padding-bottom: 0;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search label,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search label {width: 100%;}.ast-desktop-header-content .main-header-bar-navigation .ast-submenu-expanded > .ast-menu-toggle::before {transform: rotateX(180deg);}#ast-desktop-header .ast-desktop-header-content,.ast-mobile-header-content .ast-search-icon,.ast-desktop-header-content .ast-search-icon,.ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-desktop-header-content {display: none;}.ast-main-header-nav-open.ast-header-break-point #ast-desktop-header .ast-desktop-header-content,.ast-main-header-nav-open.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content {display: block;}.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item .menu-item > .sub-menu {opacity: 1;visibility: visible;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation {width: unset;margin: unset;}.ast-mobile-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle,.ast-desktop-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle {left: calc( 20px - 0.907em);right: auto;}.ast-mobile-header-content .ast-search-menu-icon,.ast-mobile-header-content .ast-search-menu-icon.slide-search,.ast-desktop-header-content .ast-search-menu-icon,.ast-desktop-header-content .ast-search-menu-icon.slide-search {width: 100%;position: relative;display: block;right: auto;transform: none;}.ast-mobile-header-content .ast-search-menu-icon.slide-search .search-form,.ast-mobile-header-content .ast-search-menu-icon .search-form,.ast-desktop-header-content .ast-search-menu-icon.slide-search .search-form,.ast-desktop-header-content .ast-search-menu-icon .search-form {right: 0;visibility: visible;opacity: 1;position: relative;top: auto;transform: none;padding: 0;display: block;overflow: hidden;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-mobile-header-content .ast-search-menu-icon .search-field,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-desktop-header-content .ast-search-menu-icon .search-field {width: 100%;padding-right: 5.5em;}.ast-mobile-header-content .ast-search-menu-icon .search-submit,.ast-desktop-header-content .ast-search-menu-icon .search-submit {display: block;position: absolute;height: 100%;top: 0;right: 0;padding: 0 1em;border-radius: 0;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation ul .sub-menu .menu-link {padding-left: 30px;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation .sub-menu .menu-item .menu-item .menu-link {padding-left: 40px;}.ast-mobile-popup-drawer.active .ast-mobile-popup-inner{background-color:#ffffff;;}.ast-mobile-header-wrap .ast-mobile-header-content, .ast-desktop-header-content{background-color:#ffffff;;}.ast-mobile-popup-content > *, .ast-mobile-header-content > *, .ast-desktop-popup-content > *, .ast-desktop-header-content > *{padding-top:0px;padding-bottom:0px;}.content-align-flex-start .ast-builder-layout-element{justify-content:flex-start;}.content-align-flex-start .main-header-menu{text-align:left;}.ast-mobile-popup-drawer.active .menu-toggle-close{color:#3a3a3a;}.ast-mobile-header-wrap .ast-primary-header-bar,.ast-primary-header-bar .site-primary-header-wrap{min-height:80px;}.ast-desktop:not(:has(.ast-header-sticked)) .ast-primary-header-bar .main-header-menu > .menu-item{line-height:80px;}.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-primary-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-below-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-above-header-bar{padding-left:20px;padding-right:20px;}.ast-header-break-point .ast-primary-header-bar{border-bottom-width:1px;border-bottom-color:var( --ast-global-color-subtle-background,var(--ast-global-color-7) );border-bottom-style:solid;}@media (min-width:922px){.ast-primary-header-bar{border-bottom-width:1px;border-bottom-color:var( --ast-global-color-subtle-background,var(--ast-global-color-7) );border-bottom-style:solid;}}.ast-primary-header-bar{background-color:var( --ast-global-color-primary,var(--ast-global-color-4) );}.ast-primary-header-bar{display:block;}@media (max-width:921.99px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}@media (max-width:544px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-minimal{color:#46896c;border:none;background:transparent;}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg{width:20px;height:20px;fill:#46896c;}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu{color:#46896c;}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .menu-link:hover, .ast-builder-menu-mobile .main-navigation .main-header-menu > .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .ast-menu-toggle:hover, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .menu-link:hover, .ast-builder-menu-mobile .main-header-menu > .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .ast-menu-toggle:hover, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .ast-menu-toggle:hover, .ast-builder-menu-mobile .main-navigation .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after{content:unset;}.ast-hfb-header .ast-builder-menu-mobile .main-header-menu, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .menu-link, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .sub-menu .menu-link{border-style:none;}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}@media (max-width:921px){.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .menu-link:hover, .ast-builder-menu-mobile .main-navigation .main-header-menu > .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .ast-menu-toggle:hover, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);background:var(--ast-global-color-4);}.ast-builder-menu-mobile .main-navigation .ast-menu-toggle:hover, .ast-builder-menu-mobile .main-navigation .main-header-menu > .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle{color:var(--ast-global-color-1);background:var(--ast-global-color-4);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after{content:unset;}.ast-builder-menu-mobile .main-navigation .main-header-menu , .ast-builder-menu-mobile .main-navigation .main-header-menu .menu-link, .ast-builder-menu-mobile .main-navigation .main-header-menu .sub-menu{background-color:var(--ast-global-color-5);}}@media (max-width:544px){.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}}.ast-builder-menu-mobile .main-navigation{display:block;}@media (max-width:921.99px){.ast-header-break-point .ast-builder-menu-mobile .main-navigation{display:block;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-mobile .main-navigation{display:block;}}:root{--e-global-color-astglobalcolor0:#46896c;--e-global-color-astglobalcolor1:#30624e;--e-global-color-astglobalcolor2:#1b4031;--e-global-color-astglobalcolor3:#1c3c2e;--e-global-color-astglobalcolor4:#F0F5FA;--e-global-color-astglobalcolor5:#FFFFFF;--e-global-color-astglobalcolor6:#D1D5DB;--e-global-color-astglobalcolor7:#111111;--e-global-color-astglobalcolor8:#111111;}.comment-reply-title{font-size:20px;font-size:1.25rem;}.ast-comment-meta{line-height:1.666666667;color:#46896c;font-size:13px;font-size:0.8125rem;}.ast-comment-list #cancel-comment-reply-link{font-size:16px;font-size:1rem;}.comments-title {padding: 1em 0 0;}.comments-title {word-wrap: break-word;font-weight: 600; padding-bottom: 1em;}.ast-comment-list {margin: 0;word-wrap: break-word;padding-bottom: 0;list-style: none;}.ast-comment-list li {list-style: none;}.ast-comment-list .ast-comment-edit-reply-wrap {-js-display: flex;display: flex;justify-content: flex-end;}.ast-comment-list .comment-awaiting-moderation {margin-bottom: 0;}.ast-comment {padding: 0 ;}.ast-comment-info img {border-radius: 50%;}.ast-comment-cite-wrap cite {font-style: normal;}.comment-reply-title {font-weight: 600;line-height: 1.65;}.ast-comment-meta {margin-bottom: 0.5em;}.comments-area .comment-form-comment {width: 100%;border: none;margin: 0;padding: 0;}.comments-area .comment-notes,.comments-area .comment-textarea,.comments-area .form-allowed-tags {margin-bottom: 1.5em;}.comments-area .form-submit {margin-bottom: 0;}.comments-area textarea#comment,.comments-area .ast-comment-formwrap input[type="text"] {width: 100%;border-radius: 0;vertical-align: middle;margin-bottom: 10px;}.comments-area .no-comments {margin-top: 0.5em;margin-bottom: 0.5em;}.comments-area p.logged-in-as {margin-bottom: 1em;}.ast-separate-container .ast-comment-list {padding-bottom: 0;}.ast-separate-container .ast-comment-list li.depth-1 .children li,.ast-narrow-container .ast-comment-list li.depth-1 .children li {padding-bottom: 0;padding-top: 0;margin-bottom: 0;}.ast-separate-container .ast-comment-list .comment-respond {padding-top: 0;padding-bottom: 1em;background-color: transparent;}.ast-comment-list .comment .comment-respond {padding-bottom: 2em;border-bottom: none;}.ast-separate-container .ast-comment-list .bypostauthor,.ast-narrow-container .ast-comment-list .bypostauthor {padding: 2em;margin-bottom: 1em;}.ast-separate-container .ast-comment-list .bypostauthor li,.ast-narrow-container .ast-comment-list .bypostauthor li {background: transparent;margin-bottom: 0;padding: 0 0 0 2em;}.comment-content a {word-wrap: break-word;}.comment-form-legend {margin-bottom: unset;padding: 0 0.5em;}.comment-reply-title {padding-top: 0;margin-bottom: 1em;}.ast-comment {padding-top: 2.5em;padding-bottom: 2.5em;border-top: 1px solid var(--ast-single-post-border,var(--ast-border-color));}.ast-separate-container .ast-comment-list .comment + .comment,.ast-narrow-container .ast-comment-list .comment + .comment {padding-top: 0;padding-bottom: 0;}.ast-separate-container .ast-comment-list li.depth-1,.ast-narrow-container .ast-comment-list li.depth-1 {padding-left: 2.5em;padding-right: 2.5em;}.ast-plain-container .ast-comment,.ast-page-builder-template .ast-comment {padding: 2em 0;}.page.ast-page-builder-template .comments-area {margin-top: 2em;}.ast-comment-list .children {margin-left: 2em;}@media (max-width: 992px) {.ast-comment-list .children {margin-left: 1em;}}.ast-comment-list #cancel-comment-reply-link {white-space: nowrap;font-size: 13px;font-weight: normal;margin-left: 1em;}.ast-comment-info {display: flex;position: relative;}.ast-comment-meta {justify-content: right;padding: 0 3.4em 1.60em;}.comments-area #wp-comment-cookies-consent {margin-right: 10px;}.ast-page-builder-template .comments-area {padding-left: 20px;padding-right: 20px;margin-top: 0;margin-bottom: 2em;}.ast-separate-container .ast-comment-list .bypostauthor .bypostauthor {background: transparent;margin-bottom: 0;padding-right: 0;padding-bottom: 0;padding-top: 0;}@media (min-width:922px){.ast-separate-container .ast-comment-list li .comment-respond{padding-left:2.66666em;padding-right:2.66666em;}}@media (max-width:544px){.ast-separate-container .ast-comment-list li.depth-1{margin-bottom:0;}.ast-separate-container .ast-comment-list .bypostauthor{padding:.5em;}.ast-separate-container .ast-comment-list .bypostauthor li{padding:0 0 0 .5em;}.ast-comment-list .children{margin-left:0.66666em;}}
				.ast-comment-cite-wrap cite {
					font-weight: 600;
					font-size: 1.2em;
				}
				.ast-comment-info img {
					box-shadow: 0 0 5px 0 rgba(0,0,0,.15);
					border: 1px solid var(--ast-single-post-border, var(--ast-border-color));
				}
				.ast-comment-info {
					margin-bottom: 1em;
				}
				.logged-in span.ast-reply-link {
					margin-right: 16px;
				}
				a.comment-edit-link, a.comment-reply-link {
					font-size: 13px;
					transition: all 0.2s;
				}
				header.ast-comment-meta {
					text-transform: inherit;
				}
				.ast-page-builder-template .ast-comment-list .children {
					margin-top: 0em;
				}
				.ast-page-builder-template .ast-comment-meta {
					padding: 0 22px;
				}
				.ast-comment-content.comment p {
					margin-bottom: 16px;
				}
				.ast-comment-list .ast-comment-edit-reply-wrap {
					justify-content: flex-start;
					align-items: center;
				}
				.comment-awaiting-moderation {
					margin-top: 20px;
				}
				.entry-content ul li, .entry-content ol li {
					margin-bottom: 10px;
				}
				.comment-respond {
					padding-top: 2em;
					padding-bottom: 2em;
				}
				.ast-comment-list + .comment-respond {
					border-top: 1px solid var(--ast-single-post-border, var(--ast-border-color));
					padding-bottom: 0;
				}
				.comment .comment-reply-title {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				@media(min-width: 545px) {
					header.ast-comment-meta {
						display: flex;
						width: 100%;
						margin-bottom: 0;
						padding-bottom: 0;
						align-items: center;
					}
					a.comment-reply-link {
						padding: 1px 10px;
						display: block;
						border-radius: 3px;
						border: none;
					}
					.ast-separate-container .ast-comment-list li.depth-1, .ast-narrow-container .ast-comment-list li.depth-1 {
						margin-bottom: 0;
					}
					.ast-comment-time {
						display: flex;
						margin-left: auto;
						font-weight: 500;
					}
					section.ast-comment-content.comment {
						padding-left: 50px;
					}
					.ast-comment .comment-reply-link:hover {
						background: #46896c;
						color: #fff;
					}
					.ast-comment .comment-edit-link:hover {
						text-decoration: underline;
					}
					svg.ast-reply-icon {
						fill: currentColor;
						margin-right: 5px;
						padding-top: 2px;
						transition: none;
					}
					.comment-reply-link:hover .ast-reply-icon {
						fill: #fff;
					}
				}
				@media(min-width: 921px) {
					.ast-comment-cite-wrap {
						margin-left: -7px;
					}
					section.ast-comment-content.comment {
						padding-left: 70px;
					}
				}
			@media (max-width:921px){.ast-comment-avatar-wrap img{max-width:2.5em;}.comments-area{margin-top:1.5em;}.ast-comment-meta{padding:0 1.8888em 1.3333em;}.ast-comment-avatar-wrap{margin-right:0.5em;}}:root {--ast-single-post-border: #e1e8ed;}.entry-content > * {margin-bottom: 1.5em;}.entry-content :where(h1,h2,h3,h4,h5,h6) {margin-top: 1.5em;margin-bottom: calc(0.3em + 10px);}code,kbd,samp {background: var(--ast-code-block-background);padding: 3px 6px;}.ast-row.comment-textarea fieldset.comment-form-comment {border: none;padding: unset;margin-bottom: 1.5em;}.entry-content .wp-block-image,.entry-content .wp-block-embed {margin-top: 2em;margin-bottom: 3em;}:root {--ast-single-post-nav-padding: 3em 0 1em;}.single .post-navigation a p {margin-top: 0.5em;margin-bottom: 0;text-transform: initial;line-height: 1.65em;font-weight: normal;}.single .post-navigation a .ast-post-nav {font-weight: 600;display: block;text-transform: uppercase;font-size: 0.85em;letter-spacing: 0.05em;}.single .post-navigation a svg {top: .125em;width: 1em;height: 1em;position: relative;fill: currentColor;}.page-links .page-link:hover,.single .post-navigation a:hover {color: #46896c;}@media( min-width: 320px ) {.single .post-navigation .nav-previous a {text-align: left;padding-right: 20px;}.single .post-navigation .nav-next a {text-align: right;padding-left: 20px;}.comment-navigation .nav-previous:after,.post-navigation .nav-previous:after {position: absolute;content: "";top: 25%;right: 0;width: 1px;height: 50%;background: var(--ast-single-post-border,var(--ast-border-color));}}@media( max-width: 544px ) {.single .post-navigation .nav-links {-js-display: inline-flex;display: inline-flex;width: 100%;padding-left: 20px; padding-right: 20px;}.single .post-navigation a p {display: none;}.single .post-navigation .nav-previous {margin-bottom: 0;}}@media( min-width: 421px ) {.single .post-navigation a {max-width: 80%;width: 100%;}.post-navigation a {font-weight: 500;font-size: 16px;}}
/*# sourceURL=astra-theme-css-inline-css */


.wp-block-joinchat-button{align-items:center;display:flex;flex-flow:row nowrap}.wp-block-joinchat-button.is-vertical{flex-direction:column}.wp-block-joinchat-button.is-vertical.is-content-justification-left{align-items:flex-start}.wp-block-joinchat-button.is-vertical.is-content-justification-center{align-items:center}.wp-block-joinchat-button.is-vertical.is-content-justification-right{align-items:flex-end}.wp-block-joinchat-button:not(.is-vertical).is-content-justification-left{justify-content:flex-start}.wp-block-joinchat-button:not(.is-vertical).is-content-justification-center{justify-content:center}.wp-block-joinchat-button:not(.is-vertical).is-content-justification-right{justify-content:flex-end}.wp-block-joinchat-button:not(.is-vertical).is-content-justification-space-between{justify-content:space-between}.wp-block-joinchat-button figure{align-items:center;display:flex;flex-direction:column;flex-shrink:0;margin:0;padding:0}.wp-block-joinchat-button figcaption{font:normal normal 400 .6em/2em var(--wp--preset--font-family--system-font,sans-serif);margin:0;padding:0}.wp-block-joinchat-button .joinchat-button__qr{background-color:#fff;box-sizing:content-box;display:block;height:200px;overflow:hidden;padding:10px;width:200px}.wp-block-joinchat-button .joinchat-button__qr canvas,.wp-block-joinchat-button .joinchat-button__qr img{display:block;margin:auto}.wp-block-joinchat-button .wp-block-buttons{flex:1 1 auto;margin:0;max-width:100%;min-width:0;width:100%}.wp-block-joinchat-button .wp-block-button.wp-block-button__width-25{min-width:25%;width:calc(25% - var(--wp--style--block-gap, .5em)*.75)}.wp-block-joinchat-button .wp-block-button.wp-block-button__width-50{min-width:50%;width:calc(50% - var(--wp--style--block-gap, .5em)*.5)}.wp-block-joinchat-button .wp-block-button.wp-block-button__width-75{min-width:75%;width:calc(75% - var(--wp--style--block-gap, .5em)*.25)}.wp-block-joinchat-button .wp-block-button.wp-block-button__width-100{min-width:100%;width:100%}.wp-block-joinchat-button .joinchat-button__link,.wp-block-joinchat-button .wp-block-button__link{align-items:center;display:inline-flex;flex-flow:row nowrap;justify-content:center;width:100%}.wp-block-joinchat-button .joinchat-button__link:before,.wp-block-joinchat-button .wp-block-button__link:before{background:transparent var(--joinchat-ico) no-repeat center;background-size:100%;content:"";display:block;height:1.5em;margin:-.75em .75em -.75em 0;width:1.5em}.wp-block-joinchat-button .joinchat-button__link{width:auto}.wp-block-joinchat-button:has(.joinchat-button__link){border:none!important;display:flex;flex-direction:column}@media (orientation:landscape)and (height >= 481px),(orientation:portrait)and (width >= 481px){.wp-block-joinchat-button.joinchat-button--qr-only .wp-block-buttons{display:none}}@media (orientation:landscape)and (height <= 480px),(width <= 480px){.wp-block-joinchat-button figure{display:none}}

/*# sourceURL=https://thedietdiary.in/wp-content/plugins/creame-whatsapp-me/gutenberg/build/style-index.css */


.real-testimonials .rt-submit-btn {
    background-color: #133E87; /* Button background color */
    color: #fff; /* Text color */
    font-size: 16px; /* Font size */
    padding: 10px 20px; /* Padding */
    border-radius: 5px; /* Rounded corners */
    border: none; /* Remove border */
    cursor: pointer; /* Pointer cursor */
    transition: all 0.3s ease-in-out; /* Smooth transition */
}

.real-testimonials .rt-submit-btn:hover {
    background-color: #0e2f6d; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge button */
}
/*# sourceURL=sp-real-blocks-style-inline-css */


:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--ast-global-color-0: var(--ast-global-color-0);--wp--preset--color--ast-global-color-1: var(--ast-global-color-1);--wp--preset--color--ast-global-color-2: var(--ast-global-color-2);--wp--preset--color--ast-global-color-3: var(--ast-global-color-3);--wp--preset--color--ast-global-color-4: var(--ast-global-color-4);--wp--preset--color--ast-global-color-5: var(--ast-global-color-5);--wp--preset--color--ast-global-color-6: var(--ast-global-color-6);--wp--preset--color--ast-global-color-7: var(--ast-global-color-7);--wp--preset--color--ast-global-color-8: var(--ast-global-color-8);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}.wp-block-button{--wp--preset--dimension--25: 25%;--wp--preset--dimension--50: 50%;--wp--preset--dimension--75: 75%;--wp--preset--dimension--100: 100%;}:root { --wp--style--global--content-size: var(--wp--custom--ast-content-width-size);--wp--style--global--wide-size: var(--wp--custom--ast-wide-width-size); }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: none;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-color{color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-color{color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-color{color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-color{color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-color{color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-color{color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-color{color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-color{color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-color{color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-background-color{background-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-background-color{background-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-background-color{background-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-background-color{background-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-background-color{background-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-background-color{background-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-background-color{background-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-background-color{background-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-background-color{background-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-border-color{border-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-border-color{border-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-border-color{border-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-border-color{border-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-border-color{border-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-border-color{border-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-border-color{border-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-border-color{border-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-border-color{border-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:root :where(.wp-block-icon svg){width: 24px;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */



					.woocommerce .woocommerce-result-count, .woocommerce-page .woocommerce-result-count {
						float: left;
					}

					.woocommerce .woocommerce-ordering {
						float: right;
						margin-bottom: 2.5em;
					}
				#customer_details h3:not(.elementor-widget-woocommerce-checkout-page h3){padding:20px 0 14px;margin:0 0 20px;border-bottom:1px solid var(--ast-border-color);}form #order_review_heading:not(.elementor-widget-woocommerce-checkout-page #order_review_heading){border-width:2px 2px 0 2px;border-style:solid;margin:0;padding:1.5em 1.5em 1em;border-color:var(--ast-border-color);}.woocommerce-Address h3, .cart-collaterals h2{padding:.7em 1em;}form #order_review:not(.elementor-widget-woocommerce-checkout-page #order_review){padding:0 2em;border-width:0 2px 2px;border-style:solid;border-color:var(--ast-border-color);}ul#shipping_method li:not(.elementor-widget-woocommerce-cart #shipping_method li){margin:0;padding:0.25em 0 0.25em 22px;text-indent:-22px;list-style:none outside;}.woocommerce span.onsale, .wc-block-grid__product .wc-block-grid__product-onsale{background-color:#46896c;color:#ffffff;}.woocommerce-message, .woocommerce-info{border-top-color:#46896c;}.woocommerce-message::before,.woocommerce-info::before{color:#46896c;}.woocommerce ul.products li.product .price, .woocommerce div.product p.price, .woocommerce div.product span.price, .widget_layered_nav_filters ul li.chosen a, .woocommerce-page ul.products li.product .ast-woo-product-category, .wc-layered-nav-rating a{color:#234337;}.woocommerce nav.woocommerce-pagination ul,.woocommerce nav.woocommerce-pagination ul li{border-color:#46896c;}.woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current{background:#46896c;color:#ffffff;}.woocommerce-MyAccount-navigation-link.is-active a{color:#46896c;}.woocommerce .widget_price_filter .ui-slider .ui-slider-range, .woocommerce .widget_price_filter .ui-slider .ui-slider-handle{background-color:#46896c;}.woocommerce .star-rating, .woocommerce .comment-form-rating .stars a, .woocommerce .star-rating::before{color:var(--ast-global-color-3);}.woocommerce div.product .woocommerce-tabs ul.tabs li.active:before,  .woocommerce div.ast-product-tabs-layout-vertical .woocommerce-tabs ul.tabs li:hover::before{background:#46896c;}.entry-content .woocommerce-message, .entry-content .woocommerce-error, .entry-content .woocommerce-info{padding-top:1em;padding-bottom:1em;padding-left:3.5em;padding-right:2em;}.woocommerce[class*="rel-up-columns-"] .site-main div.product .related.products ul.products li.product, .woocommerce-page .site-main ul.products li.product{width:100%;}.woocommerce ul.product-categories > li ul li{position:relative;}.woocommerce ul.product-categories > li ul li:before{content:"";border-width:1px 1px 0 0;border-style:solid;display:inline-block;width:6px;height:6px;position:absolute;top:50%;margin-top:-2px;-webkit-transform:rotate(45deg);transform:rotate(45deg);}.woocommerce ul.product-categories > li ul li a{margin-left:15px;}.ast-icon-shopping-cart svg{height:.82em;}.ast-icon-shopping-bag svg{height:1em;width:1em;}.ast-icon-shopping-basket svg{height:1.15em;width:1.2em;}.ast-site-header-cart.ast-menu-cart-outline .ast-addon-cart-wrap, .ast-site-header-cart.ast-menu-cart-fill .ast-addon-cart-wrap {line-height:1;}.ast-site-header-cart.ast-menu-cart-fill i.astra-icon{ font-size:1.1em;}li.woocommerce-custom-menu-item .ast-site-header-cart i.astra-icon:after{ padding-left:2px;}.ast-hfb-header .ast-addon-cart-wrap{ padding:0.4em;}.ast-header-break-point.ast-header-custom-item-outside .ast-woo-header-cart-info-wrap{ display:none;}.ast-site-header-cart i.astra-icon:after{ background:#46896c;}.ast-separate-container .ast-woocommerce-container{padding:3em;}@media (min-width:545px) and (max-width:921px){.woocommerce.tablet-columns-3 ul.products li.product, .woocommerce-page.tablet-columns-3 ul.products:not(.elementor-grid){grid-template-columns:repeat(3, minmax(0, 1fr));}}@media (min-width:922px){.woocommerce form.checkout_coupon{width:50%;}}@media (max-width:921px){.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-1.ast-mobile-header-stack.ast-no-menu-items .ast-site-header-cart, .ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-3.ast-mobile-header-stack.ast-no-menu-items .ast-site-header-cart{padding-right:0;padding-left:0;}.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-1.ast-mobile-header-stack .main-header-bar{text-align:center;}.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-1.ast-mobile-header-stack .ast-site-header-cart, .ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-1.ast-mobile-header-stack .ast-mobile-menu-buttons{display:inline-block;}.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-2.ast-mobile-header-inline .site-branding{flex:auto;}.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-3.ast-mobile-header-stack .site-branding{flex:0 0 100%;}.ast-header-break-point.ast-woocommerce-cart-menu .header-main-layout-3.ast-mobile-header-stack .main-header-container{display:flex;justify-content:center;}.woocommerce-cart .woocommerce-shipping-calculator .button{width:100%;}.woocommerce div.product div.images, .woocommerce div.product div.summary, .woocommerce #content div.product div.images, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.images, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.images, .woocommerce-page #content div.product div.summary{float:none;width:100%;}.woocommerce-cart table.cart td.actions .ast-return-to-shop{display:block;text-align:center;margin-top:1em;}.ast-container .woocommerce ul.products:not(.elementor-grid), .woocommerce-page ul.products:not(.elementor-grid), .woocommerce.tablet-columns-3 ul.products:not(.elementor-grid){grid-template-columns:repeat(3, minmax(0, 1fr));}}@media (max-width:544px){.ast-separate-container .ast-woocommerce-container{padding:.54em 1em 1.33333em;}.woocommerce-message, .woocommerce-error, .woocommerce-info{display:flex;flex-wrap:wrap;}.woocommerce-message a.button, .woocommerce-error a.button, .woocommerce-info a.button{order:1;margin-top:.5em;}.woocommerce .woocommerce-ordering, .woocommerce-page .woocommerce-ordering{float:none;margin-bottom:2em;}.woocommerce table.cart td.actions .button, .woocommerce #content table.cart td.actions .button, .woocommerce-page table.cart td.actions .button, .woocommerce-page #content table.cart td.actions .button{padding-left:1em;padding-right:1em;}.woocommerce #content table.cart .button, .woocommerce-page #content table.cart .button{width:100%;}.woocommerce #content table.cart td.actions .coupon, .woocommerce-page #content table.cart td.actions .coupon{float:none;}.woocommerce #content table.cart td.actions .coupon .button, .woocommerce-page #content table.cart td.actions .coupon .button{flex:1;}.woocommerce #content div.product .woocommerce-tabs ul.tabs li a, .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li a{display:block;}.ast-container .woocommerce ul.products:not(.elementor-grid), .woocommerce-page ul.products:not(.elementor-grid), .woocommerce.mobile-columns-2 ul.products:not(.elementor-grid), .woocommerce-page.mobile-columns-2 ul.products:not(.elementor-grid){grid-template-columns:repeat(2, minmax(0, 1fr));}.woocommerce.mobile-rel-up-columns-2 ul.products::not(.elementor-grid){grid-template-columns:repeat(2, minmax(0, 1fr));}}@media (max-width:544px){.woocommerce ul.products a.button.loading::after, .woocommerce-page ul.products a.button.loading::after{display:inline-block;margin-left:5px;position:initial;}.woocommerce.mobile-columns-1 .site-main ul.products li.product:nth-child(n), .woocommerce-page.mobile-columns-1 .site-main ul.products li.product:nth-child(n){margin-right:0;}.woocommerce #content div.product .woocommerce-tabs ul.tabs li, .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li{display:block;margin-right:0;}}@media (min-width:922px){.ast-woo-shop-archive .site-content > .ast-container{max-width:1240px;}}@media (min-width:922px){.woocommerce #content .ast-woocommerce-container div.product div.images, .woocommerce .ast-woocommerce-container div.product div.images, .woocommerce-page #content .ast-woocommerce-container div.product div.images, .woocommerce-page .ast-woocommerce-container div.product div.images{width:50%;}.woocommerce #content .ast-woocommerce-container div.product div.summary, .woocommerce .ast-woocommerce-container div.product div.summary, .woocommerce-page #content .ast-woocommerce-container div.product div.summary, .woocommerce-page .ast-woocommerce-container div.product div.summary{width:46%;}.woocommerce.woocommerce-checkout form #customer_details.col2-set .col-1, .woocommerce.woocommerce-checkout form #customer_details.col2-set .col-2, .woocommerce-page.woocommerce-checkout form #customer_details.col2-set .col-1, .woocommerce-page.woocommerce-checkout form #customer_details.col2-set .col-2{float:none;width:auto;}}.widget_product_search button{flex:0 0 auto;padding:10px 20px;}@media (min-width:922px){.woocommerce.woocommerce-checkout form #customer_details.col2-set, .woocommerce-page.woocommerce-checkout form #customer_details.col2-set{width:55%;float:left;margin-right:4.347826087%;}.woocommerce.woocommerce-checkout form #order_review, .woocommerce.woocommerce-checkout form #order_review_heading, .woocommerce-page.woocommerce-checkout form #order_review, .woocommerce-page.woocommerce-checkout form #order_review_heading{width:40%;float:right;margin-right:0;clear:right;}}select, .select2-container .select2-selection--single{background-image:url("data:image/svg+xml,%3Csvg class='ast-arrow-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='26px' height='16.043px' fill='%231c3c2e' viewBox='57 35.171 26 16.043' enable-background='new 57 35.171 26 16.043' xml:space='preserve' %3E%3Cpath d='M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z'%3E%3C/path%3E%3C/svg%3E");background-size:.8em;background-repeat:no-repeat;background-position-x:calc( 100% - 10px );background-position-y:center;-webkit-appearance:none;-moz-appearance:none;padding-right:2em;}
						.ast-onsale-card {
							position: absolute;
							top: 1.5em;
							left: 1.5em;
							color: var(--ast-global-color-3);
							background-color: var(--ast-global-color-primary, var(--ast-global-color-5));
							width: fit-content;
							border-radius: 20px;
							padding: 0.4em 0.8em;
							font-size: .87em;
							font-weight: 500;
							line-height: normal;
							letter-spacing: normal;
							box-shadow: 0 4px 4px rgba(0,0,0,0.15);
							opacity: 1;
							visibility: visible;
							z-index: 4;
						}
						@media(max-width: 420px) {
							.mobile-columns-3 .ast-onsale-card {
								top: 1em;
								left: 1em;
							}
						}
					

					.ast-on-card-button {
						position: absolute;
						right: 1em;
						visibility: hidden;
						opacity: 0;
						transition: all 0.2s;
						z-index: 5;
						cursor: pointer;
					}

					.ast-on-card-button.ast-onsale-card {
						opacity: 1;
						visibility: visible;
					}

					.ast-on-card-button:hover .ast-card-action-tooltip, .ast-on-card-button:focus .ast-card-action-tooltip {
						opacity: 1;
						visibility: visible;
					}

					.ast-on-card-button:hover .ahfb-svg-iconset {
						opacity: 1;
						color: var(--ast-global-color-2);
					}

					.ast-on-card-button .ahfb-svg-iconset {
						border-radius: 50%;
						color: var(--ast-global-color-2);
						background: var(--ast-global-color-primary, var(--ast-global-color-5));
						opacity: 0.7;
						width: 2em;
						height: 2em;
						justify-content: center;
						box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
					}

					.ast-on-card-button .ahfb-svg-iconset .ast-icon {
						-js-display: inline-flex;
						display: inline-flex;
						align-self: center;
					}

					.ast-on-card-button svg {
						fill: currentColor;
					}

					.ast-select-options-trigger {
						top: 1em;
					}

					.ast-select-options-trigger.loading:after {
						display: block;
						content: " ";
						position: absolute;
						top: 50%;
						right: 50%;
						left: auto;
						width: 16px;
						height: 16px;
						margin-top: -12px;
						margin-right: -8px;
						background-color: var(--ast-global-color-2);
						background-image: none;
						border-radius: 100%;
						-webkit-animation: dotPulse 0.65s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
						animation: dotPulse 0.65s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8);
					}

					.ast-select-options-trigger.loading .ast-icon {
						display: none;
					}

					.ast-card-action-tooltip {
						background-color: var(--ast-global-color-2);
						pointer-events: none;
						white-space: nowrap;
						padding: 8px 9px;
						padding: 0.7em 0.9em;
						color: var(--ast-global-color-primary, var(--ast-global-color-5));
						margin-right: 10px;
						border-radius: 3px;
						font-size: 0.8em;
						line-height: 1;
						font-weight: normal;
						position: absolute;
						right: 100%;
						top: auto;
						visibility: hidden;
						opacity: 0;
						transition: all 0.2s;
					}

					.ast-card-action-tooltip:after {
						content: "";
						position: absolute;
						top: 50%;
						margin-top: -5px;
						right: -10px;
						width: 0;
						height: 0;
						border-style: solid;
						border-width: 5px;
						border-color: transparent transparent transparent var(--ast-global-color-2);
					}

					.astra-shop-thumbnail-wrap:hover .ast-on-card-button:not(.ast-onsale-card) {
						opacity: 1;
						visibility: visible;
					}

					@media (max-width: 420px) {

						.mobile-columns-3 .ast-select-options-trigger {
							top: 0.5em;
							right: 0.5em;
						}
					}
				
						.woocommerce ul.products li.product.desktop-align-left, .woocommerce-page ul.products li.product.desktop-align-left {
							text-align: left;
						}
						.woocommerce ul.products li.product.desktop-align-left .star-rating,
						.woocommerce ul.products li.product.desktop-align-left .button,
						.woocommerce-page ul.products li.product.desktop-align-left .star-rating,
						.woocommerce-page ul.products li.product.desktop-align-left .button {
							margin-left: 0;
							margin-right: 0;
						}
					@media(max-width: 921px){
						.woocommerce ul.products li.product.tablet-align-left, .woocommerce-page ul.products li.product.tablet-align-left {
							text-align: left;
						}
						.woocommerce ul.products li.product.tablet-align-left .star-rating,
						.woocommerce ul.products li.product.tablet-align-left .button,
						.woocommerce-page ul.products li.product.tablet-align-left .star-rating,
						.woocommerce-page ul.products li.product.tablet-align-left .button {
							margin-left: 0;
							margin-right: 0;
						}
					}@media(max-width: 544px){
						.woocommerce ul.products li.product.mobile-align-left, .woocommerce-page ul.products li.product.mobile-align-left {
							text-align: left;
						}
						.woocommerce ul.products li.product.mobile-align-left .star-rating,
						.woocommerce ul.products li.product.mobile-align-left .button,
						.woocommerce-page ul.products li.product.mobile-align-left .star-rating,
						.woocommerce-page ul.products li.product.mobile-align-left .button {
							margin-left: 0;
							margin-right: 0;
						}
					}.ast-woo-active-filter-widget .wc-block-active-filters{display:flex;align-items:self-start;justify-content:space-between;}.ast-woo-active-filter-widget .wc-block-active-filters__clear-all{flex:none;margin-top:2px;}.woocommerce.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #customer_details.col2-set, .woocommerce-page.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #customer_details.col2-set{width:100%;}.woocommerce.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #order_review, .woocommerce.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #order_review_heading, .woocommerce-page.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #order_review, .woocommerce-page.woocommerce-checkout .elementor-widget-woocommerce-checkout-page #order_review_heading{width:100%;float:inherit;}.elementor-widget-woocommerce-checkout-page .select2-container .select2-selection--single, .elementor-widget-woocommerce-cart .select2-container .select2-selection--single{padding:0;}.elementor-widget-woocommerce-checkout-page .woocommerce form .woocommerce-additional-fields, .elementor-widget-woocommerce-checkout-page .woocommerce form .shipping_address, .elementor-widget-woocommerce-my-account .woocommerce-MyAccount-navigation-link, .elementor-widget-woocommerce-cart .woocommerce a.remove{border:none;}.elementor-widget-woocommerce-cart .cart-collaterals .cart_totals > h2{background-color:inherit;border-bottom:0px;margin:0px;}.elementor-widget-woocommerce-cart .cart-collaterals .cart_totals{padding:0;border-color:inherit;border-radius:0;margin-bottom:0px;border-width:0px;}.elementor-widget-woocommerce-cart .woocommerce-cart-form .e-apply-coupon{line-height:initial;}.elementor-widget-woocommerce-my-account .woocommerce-MyAccount-content .woocommerce-Address-title h3{margin-bottom:var(--myaccount-section-title-spacing, 0px);}.elementor-widget-woocommerce-my-account .woocommerce-Addresses .woocommerce-Address-title, .elementor-widget-woocommerce-my-account table.shop_table thead, .elementor-widget-woocommerce-my-account .woocommerce-page table.shop_table thead, .elementor-widget-woocommerce-cart table.shop_table thead{background:inherit;}.elementor-widget-woocommerce-cart .e-apply-coupon, .elementor-widget-woocommerce-cart #coupon_code, .elementor-widget-woocommerce-checkout-page .e-apply-coupon, .elementor-widget-woocommerce-checkout-page #coupon_code{height:100%;}.elementor-widget-woocommerce-cart td.product-name dl.variation dt{font-weight:inherit;}.elementor-element.elementor-widget-woocommerce-checkout-page .e-checkout__container #customer_details .col-1{margin-bottom:0;}
/*# sourceURL=woocommerce-general-inline-css */


.woocommerce form .form-row .required { visibility: visible; }
/*# sourceURL=woocommerce-inline-inline-css */


.real-testimonials .rt-submit-btn {
    background-color: #133E87; /* Button background color */
    color: #fff; /* Text color */
    font-size: 16px; /* Font size */
    padding: 10px 20px; /* Padding */
    border-radius: 5px; /* Rounded corners */
    border: none; /* Remove border */
    cursor: pointer; /* Pointer cursor */
    transition: all 0.3s ease-in-out; /* Smooth transition */
}

.real-testimonials .rt-submit-btn:hover {
    background-color: #0e2f6d; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge button */
}
.woocommerce-product-gallery{ opacity: 1 !important; }

				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			

.entry-title a {
    color: #30644d;
    font-family: 'Italiana';
}
h1.entry-title{
	font-family: 'Italiana';
}
.elementor-heading-title{
	font-size: 30px;
}


`;

export default function Page() {
  useEffect(() => {
    if ("wp-singular post-template-default single single-post postid-855 single-format-standard wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-separate-container ast-two-container ast-no-sidebar astra-4.13.12 ast-blog-single-style-1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-14 elementor-page elementor-page-855") {
      document.body.className = "wp-singular post-template-default single single-post postid-855 single-format-standard wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-separate-container ast-two-container ast-no-sidebar astra-4.13.12 ast-blog-single-style-1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-14 elementor-page elementor-page-855";
    }
    const menuToggle = document.querySelector('.menu-toggle, .hamburger, [data-toggle="menu"], .ast-mobile-menu-trigger-minimal, .ast-button-wrap, .main-header-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu, .nav-menu, #site-navigation, .ast-mobile-popup-drawer, .main-navigation, .ast-mobile-header-content');
    
    if (menuToggle && mobileMenu) {
      const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      };
      menuToggle.addEventListener('click', handleToggle);
      return () => menuToggle.removeEventListener('click', handleToggle);
    }
  }, []);

  return (
    <>
      {pageInlineStyles && <style dangerouslySetInnerHTML={{ __html: pageInlineStyles }} />}
      <div className="wp-singular post-template-default single single-post postid-855 single-format-standard wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-separate-container ast-two-container ast-no-sidebar astra-4.13.12 ast-blog-single-style-1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-14 elementor-page elementor-page-855" dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </>
  );
}
