// spyware detector
// see: http://hotlink.us/antispyware/
// based on Andrew Clover's parasite detector v2.6

parasite_status= 'NoIE';
/*@cc_on
@if (@_win32 && @_jscript_version>4)
parasite= {

// change this url with your aluria tracking url
url: 'http://www.aluriaaffiliates.com/go.rd?id=45a8x667c3037&subid=0',

defs: [
['FFEEDDCC-BBAA-9988-7766-554433221100','(control)','',''],
['F414C260-6AC0-11CF-B6D1-00AA00BBBB58','(control)','',''],

['06DFEDAA-6196-11D5-BFC8-00508B4A487D','7FaSSt','P',''],
['D8EFADF1-9009-11D6-8C73-608C5DC19089','AccessPlugin','','S'],
['92C7D65C-52F3-4545-8A35-213D730DB1ED','ActualNames','','S'],
['A4A435CF-3583-11D4-91BD-0048546A1450','ACXInstall','S',''],
['00000012-890E-4AAC-AFD9-EFF6954A34DD','AdBreak','APS',''],
['00000000-D9E3-4BC6-A0BD-3D0CA4BE5271','AdBreak/FHFMM','APS',''],
['765E6B09-6832-4738-BDBE-25F226BA2AB0','AdultLinks/QcBar','',''],
['965E6B07-6832-4738-BDBE-25F226BA2AB0','AdultLinks/QaBar','',''],
['5C015AA7-3392-4044-90CC-8E95019CFFF1','AdultLinks/LinkZZ','',''],
['910E7499-6311-4843-8EB0-0100A7955A1F','Aornum','A','S'],
['B3BE5046-8197-48FB-B89F-7C767316D03C','AproposMedia','ASP',''],
['657B9354-BB3B-4500-A9B0-109B4FA64815','ASpam/Amcis','S', ''],
['499DB658-1909-420B-931A-4A8CAEFD232F','ASpam/Drvman','S', ''],
['AutoSearch.AutoSearchBHO', 'AutoSearch', '', ''],
['CE31A1F7-3D90-4874-8FBE-A5D97F8BC8F1','BargainBuddy/Apuc','AS','P'],
['72F81209-6C73-4DE7-A3DC-408A8BD472FB','BargainBuddy/Versn','AS','P'],
['51958169-D5E3-11D1-AA42-0000E842E40A','BDE','S','A'],
['F20AE630-6DE2-43CA-A988-7CD40C36EF0B','BrowserAid','AS',''],
['6D55490C-1BD4-4790-BA31-84D261316E28','BrowserAid/ABCSearch','S',''],
['D34F641F-5210-4EB0-8ED5-9179F47E15B7','BrowserAid/BrowserPal','S','AP'],
['80672997-D58C-4190-9843-C6C61AF8FE97','BrowserAid/Rundll16','AS',''],
['0DDBB570-0396-44C9-986A-8F6F61A51C2F','BrowserAid/FeaturedResults','',''],
['2CF0B992-5EEB-4143-99C0-5297EF71F443','BrowserAid/StlbDist','S',''],
['2CF0B992-5EEB-4143-99C0-5297EF71F44A','BrowserAid/StlbAd','S',''],
['03D3AD2F-C841-443f-8A21-A7D2A62B6626','BrowserAid/WebDownloader','S',''],
['868B015F-3515-44DB-B0AD-182CD058985E','BrowserToolbar','ASPE',''],
['3E8A1971-45A5-45EE-828B-8C78431C0BD4','Bulla','A',''],
['AB4DD0F0-38DA-4F48-AAFE-7DE7323BB6B2','ClickTheButton','AP',''],
['F76FDA04-87FA-4717-91F6-4BB5BE9FD2BB','ClientMan/Tagger','ASE','P'],
['166348F1-2C41-4C9F-86BB-EB2B8ADE030C','ClientMan/2in1','ASE','P'],
['B83FC273-3522-4CC6-92EC-75CC86678DA4','CnsMin','','E'],
['268CBA84-25AE-4D38-89FE-E7606A6460E3','CometCursor/Shop','A','P'],
['1678F7E1-C422-11D0-AD7D-00400515CAAA','CometCursor','A','P'],
['AD7FAFB0-16D6-40C3-AF27-585D6E6453FD','Comload','S',''],
['A6475E6B-3C2E-4B1F-82FD-8F1C0B1D8AD0','CommonName/Toolbar','A','PE'],
['9346A6BB-1ED0-4174-AFB4-13CD4EC0AA40','CommonName','A','PES'],
['01A9EB7D-69BC-11D2-AB2F-204C4F4F5020','CoolWebSearch/DNSRelay','',''],
['C5067F59-9D0D-11D2-AA90-000000000000','CrackedEarth','A',''],
['21301D69-B8F1-46AA-B0B5-09EE2285914C','CustomToolbar/Mojo','AS',''],
['3750BFA3-1392-4AF3-AF86-9D2D4776E5A4','Cytron','A',''],
['7DD896A9-7AEB-430F-955B-CD125604FDCB','DailyWinner','A','P'],
['D53B810F-6219-11D4-95B6-0040950375E7','DialerActiveX/AllInOne','',''],
['8702D9E1-890B-4BF2-A233-FA44E582B2DE','DialerActiveX/GoInDirect','S',''],
['CEB29DA4-7AFA-4F24-B3CD-17351D590DF0','DialerOffline','',''],
['841A9192-5690-11d4-A258-0040954A01BE','DialXS','S',''],
['8869786C-8E72-45DC-911D-AB3416AC1DF1','DownloadReceiver','A',''],
['EB6AFDAB-E16D-430B-A5EE-0408A12289DC','DownloadWare','S',''],
['26FD5192-A97C-4B48-A5D7-2420CFDCFDF2','DownloadPlus/MCInst','ASE',''],
['9CF7345D-CE2A-4C32-9D4D-BBEEF8A7257B','E2Give/E2GBHO','',''],
['8786386E-4B22-11D6-9C60-E5DA06D87378','eStart','APS',''],
['F9765480-72D1-11D4-A75A-004F49045A87','eXactSearch','AS',''],
['CCE83E45-30B2-4BAE-B1F5-25D128D27A43','ezCyberSearch','A',''],
['34D516EA-40E3-4E3B-8BA8-505112738ED5','ezSearching','AS',''],
['139D88E5-C372-469D-B4C5-1FE00852AB9B','FavoriteMan','S','A'],
['000000F1-34E3-4633-87C6-1AA7A44296DA','FavoriteMan/FOne','S','A'],
['00000EF1-34E3-4633-87C6-1AA7A44296DA','FavoriteMan','S','A'],
['00000EF1-0786-4633-87C6-1AA7A44296DA','FavoriteMan','S','A'],
['EBBD88E5-C372-469D-B4C5-1FE00352AB9B','FavoriteMan/Ss32','S','A'],
['000000DA-0786-4633-87C6-1AA7A4429EF1','FavoriteMan/EMesX','S','A'],
['665ACD90-4541-4836-9FE4-062386BB8F05','FlashTrack','AP','E'],
['99B0B113-6F25-49C9-8ECF-2FDDD3EDFF6A','FreeScratchAndWin/Beta','AS','P'],
['47CC4DCD-BBC9-47A3-A677-44DB2559E0D8','FreeScratchAndWin/v5','AS','P'],
['29EEFF42-F3FA-11D5-A9D5-00500413153C','Gator/PDP/3061','S','E'],
['A9EF28A2-55D1-480B-A403-84928D59F556','Gator/PDP/3296','','SE'],
['4006E7B2-0FB2-4345-B388-083B138E80AF','Gator/PDP/3490','','SE'],
['54E7E082-1DA6-412E-96B5-C290FCEF5329','Gator/PDP/4032','','SE'],
['731918D2-517A-47e2-886A-3BC1380C591D','Gator/PDP/4094','','SE'],
['2AA62E92-E009-4A0C-8B7A-02DC4216050C','Gator/PDP/4127','','SE'],
['C7B05B62-C8D7-438C-840B-4994DAAA8EEE','Gator/PDP/5094','','SE'],
['00000000-CDDC-0704-0B53-2C8830E9FAEC','GlobalNetcom','S',''],
['5843A29E-1246-11D4-BA8C-0050DA707ACD','Gratisware','AP','S'],
['B195B3B3-8A05-11D3-97A4-0004ACA6948E','HotBar','APS',''],
['A5483501-070C-41DD-AF44-9BD8864B3015','Httper','S','A'],
['8A05273A-2EA5-42DE-AA75-59EA7D9D50D7','HuntBar/TS','S',''],
['59450DB0-341D-4436-B380-B8377D8B6796','HuntBar/Side','PS',''],
['A6250FB8-2206-499E-A7AA-E1EC437E71C0','HuntBar/MSLink','P',''],
['D6E66235-7AA6-44ED-A06C-6F2033B1D993','HuntBar/MSIn','S',''],
['D6DFF6D8-B94B-4720-B730-1C38C7065C3B','HuntBar/BTLink','P','E'],
['63B78BC1-A711-4D46-AD2F-C581AC420D41','HuntBar/BTIn','PS',''],
['0A5CF411-F0BF-4AF8-A2A4-8233F3109BED','HuntBar/SToolbar','PSE',''],
['1D2DCA0D-B30F-40AD-9690-087105F214EC','IEAccess/IEDial','','S'],
['946B0485-8F8C-4C35-A6E7-D2115E3B0B4F','IEAccess/HTMLAccess','','S'],
['B843DA96-2B2D-447E-90AB-B92929AA11AF','IEAccess/HTMLDialer','','S'],
['2ABE804B-4D3A-41BF-A172-304627874B45','IEAccess/EGDial','','S'],
['CE7C3CF0-4B15-11D1-ABED-709549C10001','IEMonit','',''],
['BD51AEC6-7991-4A60-94D6-D5FEBB655D10','IETray','',''],
['914AFB33-550B-4BD0-B4EF-8DA185504836','IEPlugin','APS',''],
['730F2451-A3FE-4A72-938C-FC8A74F15978','IGetNet/v4','S','E'],
['60E78CAC-E9A7-4302-B9EE-8582EDE22FBF','IGetNet/v5','S','E'],
['947E6D5A-4B9F-4CF4-91B3-562CA8D03313','IGetNet/ClearSearch','S',''],
['61D029AC-972B-49FE-A155-962DFA0A37BB','ILookup/Ineb','AE',''],
['C82B55F0-60E0-478C-BC55-E4E22F11301D','ILookup/Chgrgs','A',''],
['FBAA0B9E-A059-43E4-9699-76EB0AEB975B','ILookup/Gws','A',''],
['1B13BF1B-A528-4CC4-B5BF-553CAA6487AC','ILookup/Sbus','A',''],
['0AAF602E-72A1-45FE-BAB1-06971E07EAA2','ILookup/Bmeb','A',''],
['0C9CBFE1-91CD-40C2-BB64-1EC84C4C46AF','ILookup/Abeb','A',''],
['2D556983-83D7-4630-9AA5-27C74CA27B79','ILookup/Drbr','A','E'],
['D6862A22-1DD6-11D3-BB7C-444553540000','InetSpeak/BHO42602','A',''],
['2E12B523-3D4C-4FAC-9B04-0376A8F5E879','InetSpeak/WindowsIE','A',''],
['388D7EBB-CBB9-4126-8DB2-86DC6863A206','InetSpeak/Iexplorr/A','A',''],
['BC0D2038-2DE5-4A6F-92BC-B18A3E0DE32A','InetSpeak/Iexplorr/B','A',''],
['A76066C9-941B-4209-9D96-0AC80501100D','InetSpeak/Iexplorr/C','A',''],
['39AF31DD-EAFC-45EA-A56C-385B52E25CC0','InetSpeak/Iexplorr22','A',''],
['4CEBBC6B-5CEE-4644-80CF-38980BAE93F6','InetSpeak/Iexplorr23','A',''],
['6B12DABB-0B7C-44FA-B0B3-4BAFF3790256','InetSpeak/IExplorr24','A',''],
['C389F2CF-26ED-11D5-A212-004005F6FEB6','InetSpeak/eBoom','A',''],
['F7F808F0-6F7D-442C-93E3-4A4827C2E4C8','InternetOptimizer','S','AP'],
['8F4E5661-F99E-4B3E-8D85-0EA71C0748E4','InternetOptimizer/Wsem','S','AP'],
['CC87B8B6-5947-46FA-9734-68196FCF9632','InternetOptimizer/Crmrest','S',''],
['421A63BA-4632-43E0-A942-3B4AB645BE51','InternetWasher','','S'],
['000004CC-E4FF-4F2C-BC30-DBEF0B983BC9','IPInsight/ipinsigt','A',''],
['5F1ABCDB-A875-46C1-8345-B72A4567E486','ISTbar/XXXToolbar','AS',''],
['C209C230-4ABF-4E84-A91C-D69C977ECC53','ISTbar/MSCache','AS',''],
['66993893-61B8-47DC-B10D-21E0C86DD9C8','LinkReplacer','SPE',''],
['D44B5436-B3E4-4595-B0E9-106690E70A58','lop/Toolbar','A','S'],
['07C0D34D-11D7-43F7-832B-C6BB41726F5F','lop/AYB','',''],
['D7A82A12-05F5-42D8-B30D-6EF995075D2D','MagicControl','S','P'],
['B2C03E2E-2219-4FF9-810A-540ACA63F8D9','MarketScore','P',''],
['E9C87343-0E63-4ACA-9B76-B155333EE67A','MasterDialer/AXDownload','S',''],
['8699D723-6DC6-47D3-B55C-489BA006B917','MasterDialer/WebInstall','S',''],
['788A7678-38D7-4EEC-9D20-67A86D21A7FD','MasterDialer/WebUpdate','S',''],
['B8C0220D-763D-49A4-95F4-61DFDEC66EE6','MediaUpdate','A','S'],
['FA79FA22-8DB3-43D1-997B-6DBFD8845569','Meridian','AS',''],
['DA9A0B1E-9B7B-11D3-B8A4-00C04F79641C','MoneyTree/NSUpdate','','S'],
['A0F0D762-D1DE-43af-B70E-D87864743EB3','MoneyTree/NSLite','','S'],
['E8EDB60C-951E-4130-93DC-FAF1AD25F8E7','MoneyTree/UniDist','','S'],
['FC87A650-207D-4392-A6A1-82ADBC56FA64','MoneyTree/MultiDist','','S'],
['405FD721-04EF-4EF2-AB96-FB31D32D4643','MoneyTree/DyFuCA','','S'],
['27A5FF76-9919-492C-98E3-EDA3502FC829','MyPageFinder','',''],
['014DA6C1-189F-421A-88CD-07CFE51CFF10','MySearch/MySearch','',''],
['0494D0D9-F8E0-41AD-92A3-14154ECE70AC','MySearch/MyWay','',''],
['07B18EA1-A523-4961-B6BB-170DE4475CCA','MySearch/MyWeb','S',''],
['C1E58A84-95B3-4630-B8C2-D06B77B7A0FC','NavExcel','S',''],
['6EB5B540-1E74-4D91-A7F0-5B758D333702','nCase/Inst','ASP','E'],
['C7ADE150-743D-11D4-8141-00E029626F6A','NetPal','APS',''],
['6085FB5B-C281-4B9C-8E5D-D2792EA30D2F','NetPal','APS',''],
['D5C778F1-CF13-4E70-ADF0-45A953E7CB8B','NetworkEssentials/NE','AP',''],
['85A702BA-EA8F-4B83-AA07-07A5186ACD7E','NetworkEssentials/ME','AP',''],
['DD770A75-CE18-11D5-98D8-00E018981B9E','NewDotNet/A','S',''],
['4A2AACF3-ADF6-11D5-98A9-00E018981B9E','NewDotNet/B','S',''],
['E9407738-A996-421A-A309-5C93C699E10A','NewtonKnows','APS',''],
['A0BD4FF5-D828-11D3-9EB5-00600837E6EE','NowBox','A',''],
['0CEF79D8-D373-11D3-A7D3-00062962BF17','Onflow','A','S'],
['02C20140-76F8-4763-83D5-B660107B7A90','OnlineDialer/MaConnect','','S'],
['AB1E62EB-3DE3-428F-A417-64AB3C9B6CF0','OnlineDialer/eConnect','','S'],
['11BF0E2B-4229-4ADC-9C11-1C6968731018','OnlineDialer/VLoading','','S'],
['E44151C8-0C6C-4A7D-B677-4FCC9552E957','OnlineDialer/SunInfo','','S'],
['91DF007C-2F7F-4731-BE1F-38C1C13CEB8B','OnlineDialer/BelCall','','S'],
['00000000-8633-1405-0B53-2C8830E9FAEC','OnlineDialer/IEDialer','','S'],
['A47693D1-7E2A-4DE3-9907-310C5D310B5F','PerMedia/A','APS',''],
['7011471D-3F74-498E-88E1-C0491200312D','PerMedia/B','APS',''],
['8CDC6A46-08AB-435B-A3FA-7CC00E74EC9F','PerMedia/C','APS',''],
['36372A5F-1436-4A70-B808-59F6DFD36658','PerMedia/D','APS',''],
['6C413541-29A1-4FFE-894C-9D68313C9F73','Pugi/Searchit','S',''],
['23DDAE8C-6A79-4D62-80AA-E95D89CB9811','Pugi/SearchExplorer','APSE',''],
['3789CBF0-C4CA-4e98-B93B-22ACF0587FBA','Pugi/Qidion','S',''],
['A3E02B37-8608-4f57-AD58-AB91F32BA4F4','Pugi/MasterBar','S',''],
['5A66328B-926D-468B-82AA-E1ED55C6C17C','PowerStrip/PSSetup','S',''],
['7704D8D8-9EFE-4D82-9C89-0ECBA8434EEE','PowerStrip/PSOCX','S',''],
['F0AA2376-F073-4E57-86E8-0238F99087C7','RapidBlaster/AInst','AS',''],
['2B3452C5-1B9A-440F-A203-F6ED0F64C895','Remanent','A',''],
['FEE7FD53-3356-4D4D-8978-2C4AE3A7E109','SaveNow/Download','AE',''],
['FC327B3F-377B-4CB7-8B61-27CD69816BC3','SaveNow/Db','A',''],
['E2F2B9D0-96B9-4B25-B90C-636ECB207D18','SaveNow/WUInst','AS',''],
['EC788B03-A743-4274-AC9E-DB4F2A03F515','SearchAndBrowse','','E'],
['A116A5C1-AD77-446C-992A-F56200B112DB','Searchex','',''],
['11990E9F-2A4D-11D6-9507-02608CDD2842','SearchSquire/v1','A','E'],
['907CA0E5-CE84-11D6-9508-02608CDD2842','SearchSquire/v2','AE',''],
['BC97B254-B2B9-4D40-971D-78E0978F5F26','SearchWWW','',''],
['22941A26-7033-432C-94C7-6371DE343822','SCBar','AS','P'],
['00041A26-7033-432C-94C7-6371DE343822','SCBar','AS','P'],
['30402FF4-3E71-4A1C-9B4B-1CD3486A9FB2','ShopAtHomeSelect','PS','E'],
['F08555B0-9CC3-11D2-AA8E-000000000000','ShopNav/IE','S','P'],
['14B3D246-6274-40B5-8D50-6C2ADE2AB29B','ShopNav/SN','S','P'],
['E6D5237D-A6C7-4C83-A67F-F9F15586FA62','SpyBlast','A','S'],
['E2B2B5A1-B48C-4886-A318-723916A01024','SpyBlast/WU','A','S'],
['E0B795B4-FD95-4ABD-A375-27962EFCE8CF','StarDialer','','S'],
['E3F7205F-2AE0-4BF0-816B-2D24A5F20EC7','StripPlayer','S',''],
['53E10C2C-43B2-4657-BA29-AAE179E7D35C','SubSearch/HighTraffic/A','A','S'],
['A8B9F08F-2FC4-4ADE-9049-CFBA586971BA','SubSearch/HighTraffic/B','A','S'],
['77F1268B-6C19-4C61-962D-54691A128CD2','SubSearch/v2','AS',''],
['4C4871FD-30F6-4430-8834-BC75D58F1529','SubSearch/v21','A','S'],
['1D870C86-AA3C-4451-81E4-71D480A1A652','SubSearch/v22','A','S'],
['SuperBarBHO.Component','SuperBar','AS',''],
['SurfairyHlp.SurfairyHlp','Surfairy/Hlp','E',''],
['B9F28C0A-58DF-4158-A3B2-5E0F9C4C6EE8','Surfairy/PP','E',''],
['1E6F1D6A-1F20-11D4-8859-00A0CCE26836','SVAPlayer','AS',''],
['69555BE2-9A78-11D2-BA91-00600827878D','TinyBar/A','','A'],
['69550BE2-9A78-11D2-BA91-00600827878D','TinyBar/B','','A'],
['8FB0F3E2-5193-11D7-9F88-0050FC5441CB','TinyBar/C','A',''],
['82599E0A-8C81-11D7-9F97-0050FC5441CB','TinyBar/D','A',''],
['1F48AA48-C53A-4E21-85E7-AC7CC6B5FFA2','ToolbarCC/Rnd','E','AP'],
['1F48AA48-C53A-4E21-85E7-AC7CC6B5FFA6','ToolbarCC/Rnd','E','AP'],
['1F48AA48-C53A-4E21-85E7-AC7CC6B5FFA7','ToolbarCC/Win','E','AP'],
['1F48AA48-C53A-4E21-85E7-AC7CC6B5FFA8','ToolbarCC/Rnd','E','AP'],
['1F48AA48-C53A-4E21-85E7-AC7CC6B5FFAF','ToolbarCC/Pre','E','AP'],
['3D7247E8-5DB8-11D4-8A72-0050DA2EE1BE','TopText','A','P'],
['1717A4A5-D63A-4F70-B373-AE4AA46D1236','ToPicks','S',''],
['00000000-5EB9-11D5-9D45-009027C14662','Transponder','APS','E'],
['0000026A-8230-4DD4-BE4F-6889D1E74167','Transponder/TPS108','APS',''],
['00000273-8230-4DD4-BE4F-6889D1E74167','Transponder/Host','APS',''],
['00000580-C637-11D5-831C-00105AD6ACF0','Transponder/MSView','APS',''],
['FFD2825E-0785-40C5-9A41-518F53A8261F','Transponder/SiteHlpr','ASP',''],
['53CBEE82-D747-11D3-9ED0-005004189684','UCmore','P',''],
['C900B400-CDFE-11D3-976A-00E02913A9E0','webHancer','P','S'],
['B5E60A66-0C51-4894-8DF8-CBDF4E478D58','Wazam','',''],
['D5B72AED-E54A-11D6-B1B2-444553540000','Whazit/Rnd','AS',''],
['66F67511-2665-4C34-9E20-FAC2C0954EF2','Whazit/Whattt','AS',''],
['10955232-B671-11D7-8066-0040F6F477E4','Whazit/Whattn','AS',''],
['6CC1C918-AE8B-4373-A5B4-28BA1851E39A','Winshow','AS',''],
['F0230524-9D39-4E84-8452-41C592961EA7','Winupie','A','S'],
['EFCF25F1-C8F9-4C53-A03D-68D5C19225D0','Wonderland/Plus','','E'],
['0F5B6A38-B470-4446-B453-C248D8FB3A4B','Wonderland/05','','E'],
['6D6DDF37-B491-49D3-8733-600FA16940A0','Wonderland/07','','E'],
['D06855E1-7758-430F-9E20-274D32C0472E','Wonderland/91','','E'],
['9DDC8F6D-BC51-46CB-B185-EBF34D52A175','Wonderland/Web','','E'],
['08EE9C58-D8B4-4977-8198-9C771CD8C451','Wonderland/33107','','E'],
['40AC4D2D-491D-11D4-AAF2-0008C75DCD2B','WurldMedia/bpboh','P','E'],
['D14641FA-445B-448E-9994-209F7AF15641','WurldMedia','P','SE'],
['3A279869-C6B6-4410-A041-0435DE6AD916','WurldMedia/MShop','PS',''],
['98D7B53E-B1D2-4755-B0A4-703E18FF91E8','WurldMedia/MShop','PS',''],
['1B80440D-B4C0-49D7-8D2F-77F16777629B','WurldMedia/MPohs','PS',''],
['F325E940-45EE-11D7-A420-444553540000','WurldMedia/MPohs','PS',''],
['CDBCFEAE-10BA-482C-9F6E-FC67207082D8','WurldMedia/MDef','PS',''],
['8A880893-E6B2-4C29-B168-181A4EF6B852','WurldMedia/Mo','PS',''],
['BFBAE8DA-9920-4166-A5A4-EBD03F59ABF5','WurldMedia/Mo','PS',''],
['6270DFC1-EDFB-4BC4-BE8C-842740BA290B','WurldMedia/Moaa','PS',''],
['Tchk.TChkBHO','WurldMedia/TChk','S',''],
['69A4F9FF-E915-11D5-A9F1-009099104002','XDialer/XDial','',''],
['9E7138EE-4E7B-11D5-94EF-006008A4ED7F','XDialer/DialX','',''],
['8DCE908E-9E35-11D3-9431-009099104002','XDialer/AButton','',''],
['XDIVER.XDIVER.201','XDiver', 'S', ''],
['8C6C6922-6258-44AC-9912-53964AC55272','XLoader','','S'],
['57E69D5A-6539-4D7D-9637-775DE8A385B4','Xupiter','ASE',''],
['3C5BA506-6C30-4738-9CED-797ACADEA8DC','Xupiter/Sqwire','ASE',''],
['D7B3E460-9968-4191-BD6F-BEED1BC18482','Xupiter/OrbitExplorer','ASE',''],
['72A58725-2635-4725-8C53-676DFD1FEB8D','ZeroPopUp','S',''],
['319A68DB-06D0-46DA-9F93-A810D5A70836','Zipclix','S','A'],
['F0DC0CFE-D11A-489B-84C0-63748AFAABF3','Zyncos','AS','']
],

warn: 'Warning!',
infest1: 'Your browser appears to have the "',
infest2: '" parasite installed',
prob1: '. This software ',
can: 'can ',
may: 'may ',
and: ' and ',
infest3: '. It might have been installed without your knowledge. ',
info: 'Information and removal instructions.',

A: 'present you with unwanted advertising',
P: 'invade your on-line privacy',
S: 'compromise your computer\'s security',
E: 'cause errors and stability problems',

delay: 500,

write: function(doc) {
  var i, p, h= '';
  var cb= (doc.implementation)?'view-source:about:blank':'javascript:';
  h= '<div id="parasite" style="display: none;">';
  for (i= this.defs.length; i-->0;) {
    p= this.defs[i];
    if (p[0].length==36) {
      h+= '<object id="parasite_o'+i+'" classid="clsid:'+p[0]+'" ';
      h+= 'codebase="'+cb+'">&nbsp;<\/object>';
    }
  }
  h+= '<\/div>';
  doc.write(h);
  parasite_status= 'wait';
},

check: function(doc) {
  var i, p, pmv, h, el, infs= [];
  if (doc.all['parasite_o0']) return;
  for (i= this.defs.length; i-->2;) {
    p= this.defs[i]
    if (p[0].length==36) {
      el= doc.all['parasite_o'+i];
      if (el && el.readyState!=0)
        infs[infs.length]= p;
    } else { try {
      el= new ActiveXObject(p[0]);
      infs[infs.length]= p;
    } catch(e) {}}
  }
  el= doc.all['parasite'];
  if (infs.length==0) {
    parasite_status= (doc.all['parasite_o1']) ? 'clean' : 'NoAX';
    el.innerHTML= '';
    return;
  }
  h= '<h2>'+this.warn+'<\/h2>';
  for (i= infs.length; i-->0;) {
    p= infs[i]; pmv= p[1];
    if (pmv.indexOf('/')!=-1) pmv= pmv.substring(0, pmv.indexOf('/'));
    h= h+'<p>'+this.infest1+p[1]+this.infest2;
    if (p[2]!='' || p[3]!='') h= h+this.prob1;
    if (p[2]!='') h= h+this.can+this.listprobs(p[2]);
    if (p[2]!='' && p[3]!='') h= h+','+this.and;
    if (p[3]!='') h= h+this.may+this.listprobs(p[3]);
    h= h+this.infest3+'<a href="'+this.url+'">'+this.info+'<\/a><\/p>';
	srem=confirm('WARNING: Spyware detected.\n\nA spyware called "'+p[1]+'" is covertly installed on this computer.\n\nSpyware is software that displays unwanted advertising and records your communications.  Would you like to find out how spyware removal software can protect your privacy and boost system performance?');
	if(srem){pop_up(this.url);}
  }
  parasite_status= 'dirty';
},

listprobs: function(s) {
  var i, r= '';
  for (i= 0; i<s.length; i++) {
    r= r+this[s.charAt(i)];
    if (i==s.length-2) r= r+this.and;
    if (i<s.length-2)  r= r+', ';
  }
  return r;
}
}

function pop_up(u){
	var wp=window.open('','X','menubar=1,scrollbars=1,resizable=1,location=0,directories=0,status=1,top=0,left=0,width=5,height=5',true);
	wp.location.href=u;
	wp.resizeTo(screen.availWidth,screen.availHeight);
	wp.focus();
}

if (typeof(document)=='undefined') {
  var ie= WScript.createObject('InternetExplorer.Application');
  ie.navigate('about:blank');
  ie.visible= true;
  var doc= ie.document;
  parasite.write(doc);
  do {
    WScript.Sleep(parasite.delay);
    parasite.check(ie.document);
  } while (parasite_status=='wait');
} else {
  parasite.write(document);
  var parasite_check= function() {
    parasite.check(document);
    if (parasite_status=='wait')
      setTimeout(parasite_check, parasite.delay);
  }
  setTimeout(parasite_check, parasite.delay);
}
@end @*/
