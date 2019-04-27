import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { GameComponent } from './components/game/game.component';
import { InfoComponent } from './components/info/info.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShopTypeComponent } from './components/shop/shop-type/shop-type.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from './modules/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    GameComponent,
    InfoComponent,
    InventoryComponent,
    BannerComponent,
    ShopTypeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
