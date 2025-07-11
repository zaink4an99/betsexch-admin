import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountSummaryComponent } from './components/myaccount/account-summary/account-summary.component';
import { AccountSidebarComponent } from './components/myaccount/account-sidebar/account-sidebar.component';
import { AccountStatementComponent } from './components/myaccount/account-statement/account-statement.component';
import { AccountProfileComponent } from './components/myaccount/account-profile/account-profile.component';
import { AccountSidebar2Component } from './components/myaccount/account-sidebar2/account-sidebar2.component';
import { ActivityLogComponent } from './components/myaccount/activity-log/activity-log.component';
import { LifetimePlComponent } from './components/myaccount/lifetime-pl/lifetime-pl.component';
import { TransactionHistory2Component } from './components/myaccount/transaction-history2/transaction-history2.component';
import { TransactionHistoryComponent } from './components/myaccount/transaction-history/transaction-history.component';
import { ProfitLossComponent } from './components/myaccount/profit-loss/profit-loss.component';
import { MemberAcsummaryComponent } from './components/myaccount/member-acsummary/member-acsummary.component';
import { ProfitMarketComponent } from './components/myreport/profit-market/profit-market.component';
import { MatchProfitlossComponent } from './components/myreport/match-profitloss/match-profitloss.component';
import { BetlistComponent } from './components/betlist/betlist.component';
import { BetlistLiveComponent } from './components/betlist-live/betlist-live.component';
import { RiskmanagementComponent } from './components/riskmanagement/riskmanagement.component';
import { CasinoRiskmanagementComponent } from './components/casino-riskmanagement/casino-riskmanagement.component';
import { BankingComponent } from './components/banking/banking.component';
import { BlockmarketComponent } from './components/blockmarket/blockmarket.component';
import { SportSettingComponent } from './components/sport-setting/sport-setting.component';
import { SetlimitComponent } from './components/setlimit/setlimit.component';
import { SetbookmakerComponent } from './components/setbookmaker/setbookmaker.component';
import { ManipulationSettingComponent } from './components/manipulation-setting/manipulation-setting.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { OldResultComponent } from './components/old-result/old-result.component';
import { DefaultSettingComponent } from './components/default-setting/default-setting.component';
import { LoginComponent } from './components/login/login.component';
import { AdminSettingsComponent } from './components/admin-setting/admin-settings/admin-settings.component';
import { SearchUsersComponent } from './components/admin-setting/search-users/search-users.component';
import { WebsiteSettingComponent } from './components/admin-setting/website-setting/website-setting.component';
import { ManageLinksComponent } from './components/admin-setting/manage-links/manage-links.component';
import { ConcurrentUsersComponent } from './components/admin-setting/concurrent-users/concurrent-users.component';
import { P2pSettingComponent } from './components/admin-setting/p2p-setting/p2p-setting.component';
import { SurveillanceComponent } from './components/admin-setting/surveillance/surveillance.component';
import { LivemarketBetsComponent } from './components/admin-setting/livemarket-bets/livemarket-bets.component';
import { UserPnlComponent } from './components/admin-setting/user-pnl/user-pnl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AccountSummaryComponent,
    AccountSidebarComponent,
    AccountStatementComponent,
    AccountProfileComponent,
    AccountSidebar2Component,
    ActivityLogComponent,
    LifetimePlComponent,
    TransactionHistory2Component,
    TransactionHistoryComponent,
    ProfitLossComponent,
    MemberAcsummaryComponent,
    ProfitMarketComponent,
    MatchProfitlossComponent,
    BetlistComponent,
    BetlistLiveComponent,
    RiskmanagementComponent,
    CasinoRiskmanagementComponent,
    BankingComponent,
    BlockmarketComponent,
    SportSettingComponent,
    SetlimitComponent,
    SetbookmakerComponent,
    ManipulationSettingComponent,
    AddMatchComponent,
    OldResultComponent,
    DefaultSettingComponent,
    LoginComponent,
    AdminSettingsComponent,
    SearchUsersComponent,
    WebsiteSettingComponent,
    ManageLinksComponent,
    ConcurrentUsersComponent,
    P2pSettingComponent,
    SurveillanceComponent,
    LivemarketBetsComponent,
    UserPnlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
