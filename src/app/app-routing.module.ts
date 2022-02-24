import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // loadChildren: './home/home.module#HomePageModule'
    loadChildren: () => import('./home/home.module').then(x => x.HomePageModule)

  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(x => x.ListPageModule)
  },
  {
    path: 'list-infinte-scroll',
    loadChildren: () => import('./list-infinte-scroll/list-infinte-scroll.module').then(x => x.ListInfinteScrollPageModule)
  },
  {
    path: 'list-refresher',
    loadChildren: () => import('./list-refresher/list-refresher.module').then(x => x.ListRefresherPageModule)
  },
  {
    path: 'list-slide-left',
    loadChildren: () => import('./list-slide-left/list-slide-left.module').then(x => x.ListSlideLeftPageModule)
  },
  {
    path: 'list-slide-right',
    loadChildren: () => import('./list-slide-right/list-slide-right.module').then(x => x.ListSlideRightPageModule)
  },
  {
    path: 'list-fade-in',
    loadChildren: () => import('./list-fade-in/list-fade-in.module').then(x => x.ListFadeInPageModule)
  },

  {
    path: 'list-swipe-thumbnail-products',
    loadChildren: () => import('./list-swipe-thumbnail-products/list-swipe-thumbnail-products.module').then(x => x.ListSwipeThumbnailProductsPageModule)
  },

  {
    path: 'list-swipe-with-header',
    loadChildren: () => import('./list-swipe-with-header/list-swipe-with-header.module').then(x => x.ListSwipeWithHeaderPageModule)
  },

  {
    path: 'list-swipe-left-to-right',
    loadChildren: () => import('./list-swipe-left-to-right/list-swipe-left-to-right.module').then(x => x.ListSwipeLeftToRightPageModule)
  },
  {
    path: 'list-swipe-right-to-left',
    loadChildren: () => import('./list-swipe-right-to-left/list-swipe-right-to-left.module').then(x => x.ListSwipeRightToLeftPageModule)
  },

  {
    path: 'list-reorder',
    loadChildren: () => import('./list-reorder/list-reorder.module').then(x => x.ListReorderPageModule)
  },
  {
    path: 'list-expandable',
    loadChildren: () => import('./list-expandable/list-expandable.module').then(x => x.ListExpandablePageModule)
  },
  {
    path: 'grid-three-line',
    loadChildren: () => import('./grid-three-line/grid-three-line.module').then(x => x.GridThreeLinePageModule)
  },
  {
    path: 'grid-category',
    loadChildren: () => import('./grid-category/grid-category.module').then(x => x.GridCategoryPageModule)
  },
  {
    path: 'grid-subcategory',
    loadChildren: () => import('./grid-subcategory/grid-subcategory.module').then(x => x.GridSubcategoryPageModule)
  },
  {
    path: 'grid-album',
    loadChildren: () => import('./grid-album/grid-album.module').then(x => x.GridAlbumPageModule)
  },
  {
    path: 'grid-section',
    loadChildren: () => import('./grid-section/grid-section.module').then(x => x.GridSectionPageModule)
  },
  {
    path: 'grid-with-header',
    loadChildren: () => import('./grid-with-header/grid-with-header.module').then(x => x.GridWithHeaderPageModule)
  },
  {
    path: 'card-dashboard',
    loadChildren: () => import('./card-dashboard/card-dashboard.module').then(x => x.CardDashboardPageModule)
  },
  {
    path: 'card-list-simple',
    loadChildren: () => import('./card-list-simple/card-list-simple.module').then(x => x.CardListSimplePageModule)
  },
  {
    path: 'card-list-avatar',
    loadChildren: () => import('./card-list-avatar/card-list-avatar.module').then(x => x.CardListAvatarPageModule)
  },
  {
    path: 'card-shoping-simple',
    loadChildren: () => import('./card-shoping-simple/card-shoping-simple.module').then(x => x.CardShopingSimplePageModule)
  },
  {
    path: 'card-shoping-slider',
    loadChildren: () => import('./card-shoping-slider/card-shoping-slider.module').then(x => x.CardShopingSliderPageModule)
  },
  {
    path: 'card-timeline-theme-one',
    loadChildren: () => import('./card-timeline-theme-one/card-timeline-theme-one.module').then(x => x.CardTimelineThemeOnePageModule)
  },
  {
    path: 'card-timeline-theme-two',
    loadChildren: () => import('./card-timeline-theme-two/card-timeline-theme-two.module').then(x => x.CardTimelineThemeTwoPageModule)
  },
  {
    path: 'card-timeline-theme-three',
    loadChildren: () => import('./card-timeline-theme-three/card-timeline-theme-three.module').then(x => x.CardTimelineThemeThreePageModule)
  },
  {
    path: 'card-images',
    loadChildren: () => import('./card-images/card-images.module').then(x => x.CardImagesPageModule)
  },
  {
    path: 'slider-simple',
    loadChildren: () => import('./slider-simple/slider-simple.module').then(x => x.SliderSimplePageModule)
  },
  {
    path: 'slider-images',
    loadChildren: () => import('./slider-images/slider-images.module').then(x => x.SliderImagesPageModule)
  },
  {
    path: 'slider-autoplay',
    loadChildren: () => import('./slider-autoplay/slider-autoplay.module').then(x => x.SliderAutoplayPageModule)
  },
  {
    path: 'slider-arrows',
    loadChildren: () => import('./slider-arrows/slider-arrows.module').then(x => x.SliderArrowsPageModule)
  },
  {
    path: 'tab-footer-text',
    loadChildren: () => import('./tab-footer-text/tab-footer-text.module').then(x => x.TabFooterTextPageModule)
  },
  {
    path: 'tab-footer-icon',
    loadChildren: () => import('./tab-footer-icon/tab-footer-icon.module').then(x => x.TabFooterIconPageModule)
  },
  {
    path: 'tab-footer-text-icon',
    loadChildren: () => import('./tab-footer-text-icon/tab-footer-text-icon.module').then(x => x.TabFooterTextIconPageModule)
  },
  {
    path: 'tab-footer-text-icon-badge',
    loadChildren: () => import('./tab-footer-text-icon-badge/tab-footer-text-icon-badge.module').then(x => x.TabFooterTextIconBadgePageModule)
  },
  {
    path: 'tab-header-text',
    loadChildren: () => import('./tab-header-text/tab-header-text.module').then(x => x.TabHeaderTextPageModule)
  },
  {
    path: 'tab-header-icon',
    loadChildren: () => import('./tab-header-icon/tab-header-icon.module').then(x => x.TabHeaderIconPageModule)
  },
  {
    path: 'tab-header-text-icon',
    loadChildren: () => import('./tab-header-text-icon/tab-header-text-icon.module').then(x => x.TabHeaderTextIconPageModule)
  },
  {
    path: 'tab-header-text-icon-badge',
    loadChildren: () => import('./tab-header-text-icon-badge/tab-header-text-icon-badge.module').then(x => x.TabHeaderTextIconBadgePageModule)
  },
  {
    path: 'segment-header-text',
    loadChildren: () => import('./segment-header-text/segment-header-text.module').then(x => x.SegmentHeaderTextPageModule)
  },
  {
    path: 'segment-header-icon',
    loadChildren: () => import('./segment-header-icon/segment-header-icon.module').then(x => x.SegmentHeaderIconPageModule)
  },
  {
    path: 'segment-scrollable-header-text',
    loadChildren: () => import('./segment-scrollable-header-text/segment-scrollable-header-text.module').then(x => x.SegmentScrollableHeaderTextPageModule)
  },
  {
    path: 'segment-scrollable-header-icon',
    loadChildren: () => import('./segment-scrollable-header-icon/segment-scrollable-header-icon.module').then(x => x.SegmentScrollableHeaderIconPageModule)
  },
  {
    path: 'segment-footer-text',
    loadChildren: () => import('./segment-footer-text/segment-footer-text.module').then(x => x.SegmentFooterTextPageModule)
  },
  {
    path: 'segment-footer-icon',
    loadChildren: () => import('./segment-footer-icon/segment-footer-icon.module').then(x => x.SegmentFooterIconPageModule)
  },
  {
    path: 'segment-footer-text-icon',
    loadChildren: () => import('./segment-footer-text-icon/segment-footer-text-icon.module').then(x => x.SegmentFooterTextIconPageModule)
  },
  {
    path: 'button-basic-one',
    loadChildren: () => import('./button-basic-one/button-basic-one.module').then(x => x.ButtonBasicOnePageModule)
  },
  {
    path: 'button-basic-two',
    loadChildren: () => import('./button-basic-two/button-basic-two.module').then(x => x.ButtonBasicTwoPageModule)
  },
  {
    path: 'button-text',
    loadChildren: () => import('./button-text/button-text.module').then(x => x.ButtonTextPageModule)
  },
  {
    path: 'button-outline',
    loadChildren: () => import('./button-outline/button-outline.module').then(x => x.ButtonOutlinePageModule)
  },
  {
    path: 'button-transparent',
    loadChildren: () => import('./button-transparent/button-transparent.module').then(x => x.ButtonTransparentPageModule)
  },
  {
    path: 'button-expand',
    loadChildren: () => import('./button-expand/button-expand.module').then(x => x.ButtonExpandPageModule)
  },
  {
    path: 'radio-simple-left',
    loadChildren: () => import('./radio-simple-left/radio-simple-left.module').then(x => x.RadioSimpleLeftPageModule)
  },
  {
    path: 'radio-simple-right',
    loadChildren: () => import('./radio-simple-right/radio-simple-right.module').then(x => x.RadioSimpleRightPageModule)
  },
  {
    path: 'radio-circle-with-avatar',
    loadChildren: () => import('./radio-circle-with-avatar/radio-circle-with-avatar.module').then(x => x.RadioCircleWithAvatarPageModule)
  },
  {
    path: 'radio-square-with-big-image',
    loadChildren: () => import('./radio-square-with-big-image/radio-square-with-big-image.module').then(x => x.RadioSquareWithBigImagePageModule)
  },
  {
    path: 'checkbox-simple',
    loadChildren: () => import('./checkbox-simple/checkbox-simple.module').then(x => x.CheckboxSimplePageModule)
  },
  {
    path: 'checkbox-square',
    loadChildren: () => import('./checkbox-square/checkbox-square.module').then(x => x.CheckboxSquarePageModule)
  },
  {
    path: 'checkbox-right-with-avatar',
    loadChildren: () => import('./checkbox-right-with-avatar/checkbox-right-with-avatar.module').then(x => x.CheckboxRightWithAvatarPageModule)
  },
  {
    path: 'checkbox-with-big-image',
    loadChildren: () => import('./checkbox-with-big-image/checkbox-with-big-image.module').then(x => x.CheckboxWithBigImagePageModule)
  },
  {
    path: 'badge-with-card',
    loadChildren: () => import('./badge-with-card/badge-with-card.module').then(x => x.BadgeWithCardPageModule)
  },
  {
    path: 'badge-with-tab',
    loadChildren: () => import('./badge-with-tab/badge-with-tab.module').then(x => x.BadgeWithTabPageModule)
  },
  {
    path: 'badge-with-list',
    loadChildren: () => import('./badge-with-list/badge-with-list.module').then(x => x.BadgeWithListPageModule)
  },
  {
    path: 'toggle-with-avatar',
    loadChildren: () => import('./toggle-with-avatar/toggle-with-avatar.module').then(x => x.ToggleWithAvatarPageModule)
  },
  {
    path: 'toggle-simple-left',
    loadChildren: () => import('./toggle-simple-left/toggle-simple-left.module').then(x => x.ToggleSimpleLeftPageModule)
  },
  {
    path: 'searchbar-simple',
    loadChildren: () => import('./searchbar-simple/searchbar-simple.module').then(x => x.SearchbarSimplePageModule)
  },
  {
    path: 'searchbar-with-images',
    loadChildren: () => import('./searchbar-with-images/searchbar-with-images.module').then(x => x.SearchbarWithImagesPageModule)
  },
  {
    path: 'fab-simple-text',
    loadChildren: () => import('./fab-simple-text/fab-simple-text.module').then(x => x.FabSimpleTextPageModule)
  },
  {
    path: 'fab-simple-icon',
    loadChildren: () => import('./fab-simple-icon/fab-simple-icon.module').then(x => x.FabSimpleIconPageModule)
  },
  {
    path: 'fab-up-text',
    loadChildren: () => import('./fab-up-text/fab-up-text.module').then(x => x.FabUpTextPageModule)
  },
  {
    path: 'fab-up-icon',
    loadChildren: () => import('./fab-up-icon/fab-up-icon.module').then(x => x.FabUpIconPageModule)
  },
  {
    path: 'fab-down-text',
    loadChildren: () => import('./fab-down-text/fab-down-text.module').then(x => x.FabDownTextPageModule)
  },
  {
    path: 'fab-down-icon',
    loadChildren: () => import('./fab-down-icon/fab-down-icon.module').then(x => x.FabDownIconPageModule)
  },
  {
    path: 'fab-left-text',
    loadChildren: () => import('./fab-left-text/fab-left-text.module').then(x => x.FabLeftTextPageModule)
  },
  {
    path: 'fab-left-icon',
    loadChildren: () => import('./fab-left-icon/fab-left-icon.module').then(x => x.FabLeftIconPageModule)
  },
  {
    path: 'fab-right-text',
    loadChildren: () => import('./fab-right-text/fab-right-text.module').then(x => x.FabRightTextPageModule)
  },
  {
    path: 'fab-right-icon',
    loadChildren: () => import('./fab-right-icon/fab-right-icon.module').then(x => x.FabRightIconPageModule)
  },
  {
    path: 'fab-middle-text',
    loadChildren: () => import('./fab-middle-text/fab-middle-text.module').then(x => x.FabMiddleTextPageModule)
  },
  {
    path: 'fab-middle-icon',
    loadChildren: () => import('./fab-middle-icon/fab-middle-icon.module').then(x => x.FabMiddleIconPageModule)
  },
  {
    path: 'alert-basic',
    loadChildren: () => import('./alert-basic/alert-basic.module').then(x => x.AlertBasicPageModule)
  },
  {
    path: 'alert-confirmation',
    loadChildren: () => import('./alert-confirmation/alert-confirmation.module').then(x => x.AlertConfirmationPageModule)
  },
  {
    path: 'alert-prompt',
    loadChildren: () => import('./alert-prompt/alert-prompt.module').then(x => x.AlertPromptPageModule)
  },
  {
    path: 'alert-radio',
    loadChildren: () => import('./alert-radio/alert-radio.module').then(x => x.AlertRadioPageModule)
  },
  {
    path: 'alert-checkbox',
    loadChildren: () => import('./alert-checkbox/alert-checkbox.module').then(x => x.AlertCheckboxPageModule)
  },
  {
    path: 'toast-bottom',
    loadChildren: () => import('./toast-bottom/toast-bottom.module').then(x => x.ToastBottomPageModule)
  },
  {
    path: 'toast-middle',
    loadChildren: () => import('./toast-middle/toast-middle.module').then(x => x.ToastMiddlePageModule)
  },
  {
    path: 'toast-top',
    loadChildren: () => import('./toast-top/toast-top.module').then(x => x.ToastTopPageModule)
  },
  {
    path: 'actionsheet-simple',
    loadChildren: () => import('./actionsheet-simple/actionsheet-simple.module').then(x => x.ActionsheetSimplePageModule)
  },
  {
    path: 'actionsheet-icon',
    loadChildren: () => import('./actionsheet-icon/actionsheet-icon.module').then(x => x.ActionsheetIconPageModule)
  },
  {
    path: 'parallax-header-image',
    loadChildren: () => import('./parallax-header-image/parallax-header-image.module').then(x => x.ParallaxHeaderImagePageModule)
  },
  {
    path: 'form-login-one',
    loadChildren: () => import('./form-login-one/form-login-one.module').then(x => x.FormLoginOnePageModule)
  },
  {
    path: 'form-login-two',
    loadChildren: () => import('./form-login-two/form-login-two.module').then(x => x.FormLoginTwoPageModule)
  },
  {
    path: 'form-login-three',
    loadChildren: () => import('./form-login-three/form-login-three.module').then(x => x.FormLoginThreePageModule)
  },
  {
    path: 'form-register-one',
    loadChildren: () => import('./form-register-one/form-register-one.module').then(x => x.FormRegisterOnePageModule)
  },
  {
    path: 'form-register-two',
    loadChildren: () => import('./form-register-two/form-register-two.module').then(x => x.FormRegisterTwoPageModule)
  },
  {
    path: 'form-register-three',
    loadChildren: () => import('./form-register-three/form-register-three.module').then(x => x.FormRegisterThreePageModule)
  },
  {
    path: 'grid-slider',
    loadChildren: () => import('./grid-slider/grid-slider.module').then(x => x.GridSliderPageModule)
  },
  {
    path: 'grid-subcategory-two',
    loadChildren: () => import('./grid-subcategory-two/grid-subcategory-two.module').then(x => x.GridSubcategoryTwoPageModule)
  },
  {
    path: 'tab-chat',
    loadChildren: () => import('./tab-chat/tab-chat.module').then(x => x.TabChatPageModule)
  },
  {
    path: 'tab-status',
    loadChildren: () => import('./tab-status/tab-status.module').then(x => x.TabStatusPageModule)
  },
  {
    path: 'tab-call',
    loadChildren: () => import('./tab-call/tab-call.module').then(x => x.TabCallPageModule)
  },
  {
    path: 'badge-movie',
    loadChildren: () => import('./badge-movie/badge-movie.module').then(x => x.BadgeMoviePageModule)
  },
  {
    path: 'badge-card',
    loadChildren: () => import('./badge-card/badge-card.module').then(x => x.BadgeCardPageModule)
  },
  {
    path: 'badge-setting',
    loadChildren: () => import('./badge-setting/badge-setting.module').then(x => x.BadgeSettingPageModule)
  },
  {
    path: 'component-details',
    loadChildren: () => import('./component-details/component-details.module').then(x => x.ComponentDetailsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then(x => x.IntroPageModule)
  },
  {
    path: 'form-forget-one',
    loadChildren: () => import('./form-forget-one/form-forget-one.module').then(x => x.FormForgetOnePageModule)
  },
  {
    path: 'form-forget-two',
    loadChildren: () => import('./form-forget-two/form-forget-two.module').then(x => x.FormForgetTwoPageModule)
  },
  {
    path: 'form-forget-three',
    loadChildren: () => import('./form-forget-three/form-forget-three.module').then(x => x.FormForgetThreePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
