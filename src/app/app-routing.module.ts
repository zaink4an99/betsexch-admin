import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountSummaryComponent } from './components/myaccount/account-summary/account-summary.component';
import { AccountStatementComponent } from './components/myaccount/account-statement/account-statement.component';
import { AccountProfileComponent } from './components/myaccount/account-profile/account-profile.component';
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

const routes: Routes = [
   { path: '', component: LoginComponent }, 
   { path: 'login', component: LoginComponent },
   { path: 'adminhome', component: HomeComponent },
   { path: 'Amyaccount', component: AccountSummaryComponent },
   { path: 'Aaccountstatement', component: AccountStatementComponent },
   { path: 'Aprofile', component: AccountProfileComponent },
   { path: 'Aactivitylog', component: ActivityLogComponent },
   { path: 'LifetimePL', component: LifetimePlComponent },
   { path: 'Atransactionhistory2', component: TransactionHistory2Component },
   { path: 'Atransactionhistory', component: TransactionHistoryComponent },
   { path: 'AprofitAndLoss', component: ProfitLossComponent },
   { path: 'Amemberactsmry', component: MemberAcsummaryComponent },
   { path: 'Aprofitmarket', component: ProfitMarketComponent },
   { path: 'statementByUser', component: MatchProfitlossComponent },
   { path: 'Abetlist', component: BetlistComponent },
   { path: 'Abetlistlive', component: BetlistLiveComponent },
   { path: 'Ariskmanagement', component: RiskmanagementComponent },
   { path: 'ACasRiskMgmt', component: CasinoRiskmanagementComponent },
   { path: 'Abanking', component: BankingComponent },
   { path: 'AblockMarket', component: BlockmarketComponent },
   { path: 'AsportSettings', component: SportSettingComponent },
   { path: 'AMinMaxBet', component: SetlimitComponent },
   { path: 'ABookmaketSetting', component: SetbookmakerComponent },
   { path: 'AManuplationSetting', component: ManipulationSettingComponent },
   { path: 'AaddMatch', component: AddMatchComponent },
   { path: 'Achecksportwiseresult', component: OldResultComponent },
   { path: 'ADeafultSetting', component: DefaultSettingComponent }, 
   { path: 'AAdminSettings', component: AdminSettingsComponent }, 
   { path: 'Asearchusers', component: SearchUsersComponent }, 
   { path: 'AWebsiteSetting', component: WebsiteSettingComponent },
   { path: 'AManageLinks', component: ManageLinksComponent },
   { path: 'gameUsersList', component: ConcurrentUsersComponent },
   { path: 'P2PSetting', component: P2pSettingComponent }, 
   { path: 'Asurveillance', component: SurveillanceComponent },
   { path: 'AliveMatchbets', component: LivemarketBetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
