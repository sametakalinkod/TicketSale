import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  routePage!: string;
  html: string = `<main id="tt-pageContent"> 
  <br><br>
  <section class="altsayfa-baslik baskandan">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h3>Mesafeli Satış Sözleşmesi</h3>
              </div>
          </div>
  
      </div>
  </section>
  <section class="event-detail container event-detail--baskandan">
      <div class="event-detail__head row">
          <div class="event-detail__head__visual col-12 col-lg-8">
              <img alt="">
          </div>
      </div>
      <div class="event-detail__body event-detail__body--baskandan">
          <p>
              </p><div>
    <strong>MESAFELİ SATIŞ SÖZLEŞMESİ</strong><br>
    <strong>MADDE 1 - SÖZLEŞMENİN KONUSU ve KAPSAMI</strong><br>
    İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”) 6502 Sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği'ne uygun olarak düzenlenmiştir. İşbu Sözleşme'nin tarafları işbu Sözleşme kapsamında 6502 Sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği’nden kaynaklanan yükümlülük ve sorumluluklarını bildiklerini ve anladıklarını kabul ve beyan ederler. İşbu Sözleşmenin konusunu; Alıcı'nın, Satıcı’ya ait <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> alan adlı web sitesinden, Satıcı‘ya ait Mal/Hizmetin satın alınmasına yönelik elektronik olarak sipariş verdiği, Sözleşmede belirtilen niteliklere sahip Mal/Hizmetin satışı ve teslimi ile ilgili olarak 6502 Sayılı Tüketicinin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanması oluşturur.<br>
    <strong>MADDE 2- SÖZLEŞME KONUSU MAL VE HİZMET</strong><br>
    İşbu sözleşmenin konusu hizmet, Satıcı’nın Cosmos Theatre işletmesinde düzenlenecek olan etkinlikler ve Andy isimli etkinliktir.<br>
    <strong>MADDE 3- SÖZLEŞME KONUSU ETKİNLİK BİLETLERİ</strong><br>
    Sözleşmedeki satım konusu Bilet’in/ Bilet’lerin temel özelliklerini (türü, miktarı, adedi, hangi etkinlikle ilişkili olduğu, vb.) Satıcı’ya ait Satış Platformu üzerinden yayınlanır.<br>
    Listelenen ve Satış Platformunda ilan edilen fiyatlar, Bilet’in satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.<br>
    Satıcı, kendisinin belirleyeceği ve önceden duyuracağı tarih aralığı içeren dönemlerde yapacağı kampanyalarla, Satış Platformu’nun kendi belirleyeceği kısımlarında satılan birim bilet için hizmet bedeli (ve/veya diğer ek ücretler) almadan Alıcı’ya satış yapabilir.<br>
    Satıcı tarafından kampanya düzenlenmiş ise ilgili ürünün temel özellikleri, Alıcı tarafından kampanya süresince incelenebilir. Bu özellikler ve fiyatlar kampanya sona erme tarihine kadar geçerlidir.<br>
    Sözleşme konusu etkinliğe ilişkin bilet satın alma işleminin gerçekleşmesiyle birlikte, Alıcı’nın seçimine bağlı olarak Bilet, dijital ortamda düzenlenip Alıcı’ya dijital ortam araçlarıyla iletilir.<br>
    Alıcı’nın, etkinlikte fiziken bilet teslimatı seçeneğinin sunulması durumunda Bilet’in kendi belirlediği adrese teslimini talep etmesi halinde, işbu Sözleşmede belirtilen teslimat kurye bedeli Alıcı tarafından ödenir. Kargo firmasının, Bilet’i Alıcı’ya teslim aşamasında karşılaşacağı Alıcı’dan kaynaklanan herhangi bir sorun ya da Alıcı’nın beyan ettiği adreste bulunmaması nedeniyle siparişi verilen Bilet’in Alıcı'ya zamanında teslim edilememesinden dolayı Satıcı sorumlu tutulamaz.<br>
    Alıcı, Sözleşme ile beyan ettiği teslimat adresinde bulunmadığı takdirde, Bilet’in tekrar gönderilmesi nedeniyle oluşacak ek nakliye maliyetinden sorumlu olacaktır. Bilet, Alıcı'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun adı/unvanı, adresi ve iletişim bilgileri Alıcı tarafından açık ve yazılı olarak sipariş aşamasında belirtilecek olup, işbu kişi/kuruluşun teslimatı kabul etmemesinden ya da belirtilen adreste bulunmamasından ötürü teslimatın gerçekleşemediği için Satıcı sorumlu tutulamaz.<br>
    <strong>MADDE 4 - TARAFLARIN SÖZLEŞMEDEN KAYNAKLI GENEL HAK VE YÜKÜMLÜLÜKLERİ</strong><br>
    Alıcı, Satıcı’ya ait internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup, bilgi sahibi olduğunu, elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder. Alıcı’nın; Ön Bilgilendirmeyi elektronik ortamda teyit etmesi, mesafeli satış sözleşmesinin kurulmasından evvel, siparişi verilen hizmete ait temel özellikleri, hizmetlerin vergiler dâhil fiyatını, ödeme ve etkinlik bilgilerini de doğru ve eksiksiz olarak edindiğini kabul, beyan ve taahhüt eder.<br>
    Satıcı, Satış Platformu’nun sahibi ve işleteni olup, ana faaliyet konusu olarak Satış Platformu üzerinden Sözleşme’nin 2. maddesinde tanımlı, organize edilen ve işletilen Etkinliğin/Etkinliklerin giriş biletlerinin satışını yapmakla birlikte bu ana faaliyet konusu ile ilişkili diğer mal ve hizmetleri, Satış Platformu üzerinden müşterilerine sunar.<br>
    Satış Platformu, yalnızca kişisel kullanımı amaçlar. Alıcının, İnternet resmi sitesinden bilet satın alırken her bir etkinlik için önceden belirlenmiş sınırlı sayıda bilet alma hakkı bulunmaktadır. Sözleşme konusu sınırlı bilet adedi (9 adet)’tir.&nbsp; Bu uygulama ile haksız bilet alımlarının önüne geçilmesi hedeflenmektedir. Bilet alımları, kişi başına ve/veya kredi kartı başına belli bir maksimum adet ile sınırlandırılabilecek olup, bazı etkinliklerde hane başına sınırlandırmaya da gidilebilir. Satıcı, bildirdiği adet sınırı üzerinde satın alınan biletleri, önceden bildirimde bulunmaksızın tek taraflı iptal etme hakkını saklı tutmaktadır. Satış Platformu’ndan satın alınan bilet ve diğer ürün ve hizmetlerin üçüncü kişilere satışı ya da herhangi bir şekilde tekrar ticarete konu edilmesi kesin olarak yasaktır. Yasal mercilerin bu anlamda Satıcı’dan talep edebileceği bilgi ve belgeler, Satıcı tarafından yasal merciler ile paylaşılabilir.<br>
    Bilet satın alındıktan sonra teslimatı için Ön Bilgilendirme Formu’nun elektronik ortamda teyit edilmesi şarttır. Herhangi bir nedenle Bilet satış bedelinin ödemesi Satıcı’ya ulaşmaz veya ödeme banka kayıtlarında iptal edilir ise, Satıcı, Bilet’in teslimi yükümlülüğünden kurtulmuş kabul edilir. Alıcı, Sözleşme konusu etkinlik biletinin teslimatı için işbu Sözleşme’yi elektronik ortamda teyit edeceğini, herhangi bir nedenle sözleşme konusu etkinlik bedelinin ödenmemesi ve/veya banka kayıtlarında iptal edilmesi halinde, Satıcı’nın sözleşme konusu etkinliği Alıcı’ya sergilemek yükümlülüğünün sona ereceğini kabul, beyan ve taahhüt eder.<br>
    Bilet, kredi kartıyla satın alınmaktaysa sipariş ve Bilet’in tesliminden sonra Alıcı'ya ait kredi kartının Alıcı'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile banka veya finans kuruluşun Bilet satış bedelini Satıcı'ya ödememesi halinde, Alıcı kendisine teslim edilmiş olması kaydıyla Bilet’i 3 (üç) gün içinde Satıcı'ya iade etmek zorundadır. Bu takdirde teslimat giderleri de Alıcı'ya ait olacaktır.<br>
    Alıcı, kendisi ve kendisi haricinde üçüncü kişiler için de bilet satın alımı yaptığı diğer kişilerin Satıcı’ya bildirdiği kişisel verileri hakkında doğru bilgi ve beyanda bulunduğunu, aksi halde tüm sorumluluğun münhasıran kendisine ait olduğunu, bilet satın alımı, işletme kuralları ve buna bağlı diğer hususlarla ilgili bilet satın aldığı kişileri bilgilendirmekle yükümlü olduğunu kabul, beyan ve taahhüt eder.<br>
    <strong>MADDE 5 - BİLETLERİN SAKLANMASI</strong><br>
    Satın alınan Bilet’in/Bilet’lerin kontrol ve muhafaza sorumluluğu Alıcı’ya aittir. Bilet, fiziken doğrudan güneş ışığına maruz kalması, ısı yahut nem sebebiyle zarar görebilir. Bu sebeple Bilet, güneşe doğrudan maruz kalmayan, kuru ve güvenli bir yerde muhafaza edilmelidir. Kaybolan, çalınan ya da herhangi bir şekilde tahrip olan Bilet’ten ötürü Satıcı’nın sorumluluğu bulunmamaktadır.<br>
    <strong>MADDE 6 - MEKÂN VE ORGANİZASYON KURALLARI</strong><br>
    <strong>MADDE 6.A - Cosmos Theatre Genel Kural &amp; Şartları</strong><br>
    <ul>
      <li>
        Talep doğrultusunda Vegan Menü opsiyonu mevcuttur.</li>
      <li>
        Salona dışarıdan getirilen yiyecek ve içecekler alınmayacaktır.</li>
      <li>
        Salona engellilere kılavuzluk eden köpekler haricinde evcil hayvan ile girilmesine izin verilmemektedir.</li>
      <li>
        Salondaki ses düzenleri geçici duyma problemlerine yol açabilir.</li>
      <li>
        Salondaki ışık düzenleri geçici göz rahatsızlıklarına neden olabilir.</li>
      <li>
        Salona profesyonel ses ve görüntü araçları (video kamera ve fotoğraf makinası) ile girilmesi yasaktır.&nbsp;</li>
      <li>
        Cosmos Theatre kapalı alanlarında sigara içmek/tütün ürünü kullanmak 4207 sayılı Kanun gereği kesinlikle yasaktır. Bu kurala uymayanlar, uyarı yapılmaksızın etkinlik alanı dışına çıkarılırlar ve bilet iadesi yapılmaz.</li>
      <li>
        Cosmos Theatre, katılımcıların sağlığını ve güvenliğini, huzurunu, tesisin iç işleyişindeki düzenini korumak ve sağlamak vb. amacıyla etkinliğe uygun bulmadığı kişileri,bilet ücretini iade ederek etkinlik mekanına almama hakkına sahiptir.</li>
      <li>
        Cosmos Theatre'de fine dining atmosferinin yaşanması için kıyafet kodu, şık gece kıyafetidir.&nbsp;Şort, spor kıyafetler, rahatsız edici grafik veya dil içeren kıyafetler, parmak arası terlikler ve havuz kıyafetleri yasaktır.</li>
      <li>
        Oturma planı ve masa düzeni etkinliğin içeriğine göre değişkenlik gösterebilmektedir. Detaylı bilgi almak için lütfen bizimle iletişime geçiniz. 444 90 30</li>
    </ul>
    &nbsp;<br>
    <strong>MADDE 6.B - ANDY Etkinliği Kural &amp; Şartları</strong><br>
    <ul>
      <li>
        Kapı açılış saati 20:00 , yemek servisi başlangıcı 20.30, Show başlangıç saati 21:00’dir.</li>
      <li>
        Talep doğrultusunda Vegan Menü opsiyonu mevcuttur.</li>
      <li>
        6 yaş üstü misafirlerimiz ANDY Show’a katılımda bulunabilir fakat 18 yaş altı club'a kabul edilmemektedir.</li>
      <li>
        Etkinlik alanına dışarıdan getirilen yiyecek ve içecekler alınmayacaktır.</li>
      <li>
        Etkinlik alanına engellilere kılavuzluk eden köpekler haricinde evcil hayvan ile girilmesine izin verilmemektedir.</li>
      <li>
        Etkinlik alanındaki ses düzenleri geçici duyma problemlerine yol açabilir.</li>
      <li>
        Etkinlik alanındaki ışık düzenleri geçici göz rahatsızlıklarına neden olabilir.</li>
      <li>
        Etkinlik alanına profesyonel ses ve görüntü araçları (video kamera ve fotoğraf makinası) ile girilmesi yasaktır.</li>
      <li>
        Etkinlik başlangıç saatinden en az yarım saat önce biletle birlikte etkinliğin kapısında olacak şekilde hazır olunması gerekmektedir.</li>
      <li>
        Show başlangıcından sonra salona misafir alınmayacaktır.</li>
      <li>
        Cosmos Theatre kapalı alanlarında sigara içmek/tütün ürünü kullanmak 4207 sayılı Kanun gereği kesinlikle yasaktır. Bu kurala uymayanlar, uyarı yapılmaksızın etkinlik alanı dışına çıkarılırlar ve bilet iadesi yapılmaz.</li>
      <li>
        Organizatör, indirimli bilet satın alma koşullarında değişiklik yapma hakkını saklı tutar.</li>
      <li>
        Cosmos Theatre, katılımcıların sağlığını ve güvenliğini, huzurunu, tesisin iç işleyişindeki düzenini korumak ve sağlamak vb. amacıyla etkinliğe uygun bulmadığı kişileri, bilet ücretini iade ederek etkinlik mekanına almama hakkına sahiptir.</li>
      <li>
        Cosmos Theatre'de fine dining atmosferinin yaşanması için kıyafet kodu, şık gece kıyafetidir.&nbsp;Şort, spor kıyafetler, rahatsız edici grafik veya dil içeren kıyafetler, parmak arası terlikler ve havuz kıyafetleri yasaktır.</li>
    </ul>
    <strong>MADDE 6.C - Konser &amp; Etkinlik Kural &amp; Şartları</strong><br>
    <ul>
      <li>
        Kapı açılış saati 20:00, konser başlangıç saati 22:00’tir.</li>
      <li>
        Yemek servisi başlangıcından sonra giriş yapan misafirlerimize ful fix menü servis garantisi verilmemektedir</li>
      <li>
        Talep doğrultusunda Vegan Menü opsiyonu mevcuttur.</li>
      <li>
        12 yaş üstü misafirlerimiz ebeveyn eşliğinde konserlere katılımda bulunabilir fakat 18 yaş altı club'a kabul edilmemektedir.&nbsp;</li>
      <li>
        Etkinlik alanına dışarıdan getirilen yiyecek ve içecekler alınmayacaktır.</li>
      <li>
        Etkinlik alanına engellilere kılavuzluk eden köpekler haricinde evcil hayvan ile girilmesine izin verilmemektedir.</li>
      <li>
        Etkinlik alanındaki ses düzenleri geçici duyma problemlerine yol açabilir.</li>
      <li>
        Etkinlik alanındaki ışık düzenleri geçici göz rahatsızlıklarına neden olabilir.</li>
      <li>
        Etkinlik alanına profesyonel ses ve görüntü araçları (video kamera ve fotoğraf makinası) ile girilmesi yasaktır.</li>
      <li>
        Etkinlik başlangıç saatinden en az yarım saat önce biletle birlikte etkinliğin kapısında olacak şekilde hazır olunması gerekmektedir.</li>
      <li>
        Cosmos Theatre kapalı alanlarında sigara içmek/tütün ürünü kullanmak 4207 sayılı Kanun gereği kesinlikle yasaktır. Bu kurala uymayanlar, uyarı yapılmaksızın etkinlik alanı dışına çıkarılırlar ve bilet iadesi yapılmaz.</li>
      <li>
        Organizatör, indirimli bilet satın alma koşullarında değişiklik yapma hakkını saklı tutar.</li>
      <li>
        Organizatör, etkinlik saatinde değişiklik yapma hakkına sahiptir.</li>
      <li>
        Cosmos Theatre, katılımcıların sağlığını ve güvenliğini, huzurunu, tesisin iç işleyişindeki düzenini korumak ve sağlamak vb. amacıyla etkinliğe uygun bulmadığı kişileri, bilet ücretini iade ederek etkinlik mekanına almama hakkına sahiptir.</li>
      <li>
        Cosmos Theatre'de fine dining atmosferinin yaşanması için kıyafet kodu, şık gece kıyafetidir.&nbsp;Şort, spor kıyafetler, rahatsız edici grafik veya dil içeren kıyafetler, parmak arası terlikler ve havuz kıyafetleri yasaktır.</li>
      <li>
        Oturma planı ve masa düzeni etkinliğin içeriğine göre değişkenlik gösterebilmektedir. Detaylı bilgi almak için lütfen bizimle iletişime geçiniz. 444 90 30</li>
    </ul>
    Bilet/Biletlerin satın alma şartları, Satıcı ve Etkinlik Organizatörü’nün kurallarına göre düzenlenmiştir. Bu kural ve düzenlemelerden herhangi birinin Alıcı tarafından ihlal edilmesi, diğer katılımcılara ya da Etkinliğin gerçekleştiği mekana zarar verilmesi, diğer katılımcıların rahatsız olacağı yasak davranışlar (kamu güvenliği, kamu sağlığı yahut COVID-19 ‘a karşı alınacak önlemler dahil olmak üzere) sergilenmesi, hukuka aykırı ve/veya suç teşkil eylemlerde bulunulması durumunda, Satıcı ve Etkinlik Organizatörü, Alıcı’yı mekân dışına çıkarma ya da mekâna almama hakkına sahiptir. Bu durumda Satıcı’nın bilet bedeli iadesi de dahil olmak üzere herhangi bir herhangi bir şekilde sorumluluğu söz konusu değildir.<br>
    <strong>MADDE 7 - ETKİNLİĞİN İPTALİ VEYA GERÇEKLEŞME TARİHİNİN ERTELENMESİ</strong><br>
    Etkinlik, Satıcı ve Etkinlik Organizatörü tarafından da çeşitli nedenlerden ötürü iptal edilebilir ya da ertelenebilir. Etkinliğin/Etkinliklerin iptali ya da ertelenmesi halinde izlenecek yol ve yöntemler Satıcı ve Etkinlik Organizatörü tarafından belirlenecektir. Bu halde Satıcı, Alıcı’nın bilgilendirilmesi için Etkinlik Organizatörü tarafından kendisine sağlanan bilgileri Satış Platformlarında yayınlar. Alıcı, yapılacak bildirim ve duyuruları takip etmekle yükümlüdür. Satıcı, yapılacak bildirim ve duyurulardan Alıcı’nın Etkinlik’ten önce bilgi sahibi olması için hiçbir taahhütte bulunmaz, garanti vermez, güvence temininde bulunmaz. Bu durum, hiçbir surette Sözleşme konusu satılan Bilet/Bilet’lerin yahut sunulan hizmetin ayıplı olduğunu göstermez.<br>
    Etkinliğin/Etkinliklerin iptali veya ertelenmesi durumlarında Satıcı’nın herhangi bir sorumluluğu bulunmamaktadır. İleri bir tarihe ertelenen Etkinlik/ Etkinlikler bakımından Alıcı, kendisine yapılacak bildirim üzerine belirlenen yeni tarihteki Etkinlik/Etkinliklere katılamayacağını Etkinlik Organizatörünün verdiği süre içerisinde Satıcı’ya bildirmediği takdirde satın almış olduğu bilet, iptal edilmez ve satış bedeli iade edilmez.<br>
    Satıcı, Bilet’in Alıcı’ya tesliminin imkânsız hale gelmesi nedeniyle Sözleşme konusu yükümlülüklerini yerine getiremezse, bu durumu öğrenmesini takip eden 3 (üç) gün içinde Alıcı’ya bildirim yapmak ve işbu bildirimi takip eden 14 (on dört) günlük süre içinde Alıcı’dan tahsil ettiği Bilet Bedeli, Hizmet Bedeli ve bilet teslimatına ilişkin tüm bedelleri iade etmekle yükümlüdür. Kampanya ile satışı yapılan biletlerde hizmet bedeli ve/veya ek ücretler alınmamışsa, Satıcı’nın bilet bedeli dışında herhangi bir iade yükümlülüğü doğmaz.<br>
    Etkinliğin iptali veya ertelenmesi durumlarında iade koşulları konusunda Satıcı bazı sınırlandırmalar getirme hakkı mevcuttur. Etkinlik Organizatörü tarafından getirilecek iade koşulları ve talimatları ile diğer tüm sınırlandırmalara uymak Alıcı’nın sorumluluğundadır. Bu koşullara uyulmaması halinde Bilet satış bedeli iadesi yapılmayabilir, bu kapsamda Satıcı hiçbir sorumluluk üstlenmez.<br>
    <strong>MADDE 8 - MÜCBİR SEBEPLER VE BEDEL İADESİ</strong><br>
    Satıcı, tarafların iradesi dışında gelişen, önceden öngörülemeyen ve tarafların borçlarını yerine getirmesini engelleyici ve/veya geciktirici hallerin oluşması gibi mücbir sebepler halleri nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu Alıcı’ya bildireceğini kabul, beyan ve taahhüt eder. Alıcı da siparişin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesini Satıcı’dan talep etme hakkını haizdir. Alıcı tarafından siparişin iptal edilmesi halinde Alıcı’nın nakit ile yaptığı ödemelerde, ürün tutarı 14 gün içinde kendisine nakden ve defaten ödenir. Alıcı’nın kredi kartı ile yaptığı ödemelerde ise, ürün tutarı, siparişin Alıcı tarafından iptal edilmesinden sonra 14 gün içerisinde ilgili bankaya iade edilir. Alıcı, Satıcı tarafından kredi kartına iade edilen tutarın banka tarafından Alıcı hesabına yansıtılmasına ilişkin ortalama sürecin 2 ile 3 haftayı bulabileceğini, bu tutarın bankaya iadesinden sonra Alıcı’nın hesaplarına yansıması halinin tamamen banka işlem süreci ile ilgili olduğundan, ALICI, olası gecikmeler için Satıcı’yı sorumlu tutamayacağını kabul, beyan ve taahhüt eder.<br>
    <strong>MADDE 9 – ALICININ DİĞER YÜKÜMLÜLÜKLERİ</strong><br>
    Alıcı, Satıcı’ya ait internet sitesini kullanırken yasal mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi baştan kabul ve taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve cezai yükümlülükler tamamen ve münhasıran Alıcı’yı bağlayacaktır.<br>
    Alıcı, Satıcı’ya ait internet sitesini hiçbir şekilde kamu düzenini bozucu, genel ahlaka aykırı, başkalarını rahatsız ve taciz edici şekilde, yasalara aykırı bir amaç için, başkalarının maddi ve manevi haklarına tecavüz edecek şekilde kullanamaz. Ayrıca, üye başkalarının hizmetleri kullanmasını önleyici veya zorlaştırıcı faaliyet (spam, virus, truva atı, vb.) işlemlerde bulunamaz.<br>
    Satıcı’ya ait internet sitesinin üzerinden, Satıcı’nın kendi kontrolünde olmayan ve/veya başkaca üçüncü kişilerin sahip olduğu ve/veya işlettiği başka web sitelerine ve/veya başka içeriklere link verilebilir. Bu linkler Alıcı’ya yönlenme kolaylığı sağlamak amacıyla konmuş olup herhangi bir web sitesini veya o siteyi işleten kişiyi desteklememekte ve Link verilen web sitesinin içerdiği bilgilere yönelik herhangi bir garanti niteliği taşımamaktadır.<br>
    İşbu sözleşme içerisinde sayılan maddelerden bir ya da birkaçını ihlal eden üye işbu ihlal nedeniyle cezai ve hukuki olarak şahsen sorumlu olup, Satıcı’yı bu ihlallerin hukuki ve cezai sonuçlarından ari tutacaktır. Ayrıca; işbu ihlal nedeniyle, olayın hukuk alanına intikal ettirilmesi halinde, Satıcı’nın üyeye karşı üyelik sözleşmesine uyulmamasından dolayı tazminat talebinde bulunma hakkı saklıdır.<br>
    &nbsp;<br>
    <strong>MADDE 10 - KREDİ KARTI BİLGİLERİNİN GÜVENLİĞİNE İLİŞKİN ALICI’NIN YÜKÜMLÜLÜKLERİ</strong><br>
    Alıcı, kredi kartı bilgilerini başkalarıyla paylaşmamalıdır. Alıcı, bu bilgilerin güvenliğinden bizzat ve sadece kendisinin sorumlu olacağını, kredi kartı bilgilerinin kendisinden başka biri tarafından kullanılmasından Satıcı’nın herhangi bir sorumluluğu bulunmadığını kabul ve beyan eder. Alıcı’nın kredi kartı bilgilerinin güvenliği, saklanması, üçüncü kişilerin bilgisinden uzak tutulması, kullanılması gibi hususlardaki tüm ihmal ve kusurlarından dolayı Satıcı’nın doğrudan veya dolaylı herhangi bir sorumluluğunun olmadığını, ihmal ve kusuru sebebiyle Satıcı’nın bir zarara uğraması halinde uğranılan zararı tazmin etmeyi kabul ve beyan eder.<br>
    Alıcı ile sipariş esnasında kullanılan kredi kartı hamilinin aynı kişi olmaması veya ürünün Alıcı’ya tesliminden evvel, siparişte kullanılan kredi kartına ilişkin güvenlik açığı tespit edilmesi halinde; Satıcı, kredi kartı hamiline ilişkin kimlik ve iletişim bilgilerini, siparişte kullanılan kredi kartının bir önceki aya ait ekstresini yahut kart hamilinin bankasından kredi kartının kendisine ait olduğuna ilişkin yazıyı ibraz etmesini Alıcı’dan talep edebilir. Alıcı’nın talebe konu bilgi/belgeleri temin etmesine kadar geçecek sürede sipariş dondurulacak olup, mezkur taleplerin 24 saat içerisinde karşılanmaması halinde ise SATICI, siparişi iptal etme hakkını haizdir.<br>
    <strong>MADDE 11 - GİZLİLİK POLİTİKASI VE KİŞİSEL VERİLERİN KORUNMASI</strong><br>
    Alıcı, Satıcı’ya ait internet sitesine üye olurken verdiği kişisel ve diğer sair bilgilerin gerçeğe uygun olduğunu, Satıcı’nın bu bilgilerin gerçeğe aykırılığı nedeniyle uğrayacağı tüm zararları, Satıcı’nın ilk bildirimi üzerine derhal, nakden ve defaten tazmin edeceğini beyan ve taahhüt eder.<br>
    5651 sayılı Kanun gereği, hizmet ve içerikleri barındıran sistemleri sağlayan ve işleten kişi olarak, sistemle ilgili sorunların tanımlanması ve sitede çıkabilecek sorunların giderilebilmesi için, Satıcı gerektiğinde Alıcı’nın IP adresi, Alıcı’yı genel bir şekilde tanımlamak ve kapsamlı demografik bilgi toplamak amacıyla da kullanılabilir. Satıcı <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> internet sitesi dahilinde başka internet sitelerine de link verebilir. SATICI link vasıtasıyla erişilen internet sitelerinin gizlilik uygulamaları ve içeriklerine yönelik herhangi bir sorumluluk taşımamaktadır.<br>
    Satıcı işbu Gizlilik Politikasında aksi belirtilmedikçe ve aşağıda belirtilen sınırlı durumlar haricinde, işbirliği içinde olmadığı şirketlere ve üçüncü kişilere, Alıcı’ya ait bilgileri açıklamayacaktır. Bu durumlar;<br>
    <ul>
      <li>
        Yetkili hukuki otoriteler tarafından çıkartılan ve yürürlükte olan Kanun, Kanun Hükmünde Kararname, Yönetmelik v.b. hukuk kurallarının getirdiği zorunluluklara uyulması,</li>
      <li>
        Satıcı’nın üyeleri ve işbirliği içinde bulunduğu işletmeler ile yaptığı sözleşmelerin gereklerinin yerine getirilmesi ve bunların uygulamaya konulması,</li>
      <li>
        Yetkili idari ve adli otoriteler tarafından usulüne göre yürütülen bir araştırma veya soruşturmanın yürütülmesi amacıyla, ALICI ile ilgili bilgi talep edilmesi,</li>
      <li>
        ALICI’nın (ve diğer alıcıların) haklarını veya güvenliklerini korumak için bilgi verilmesi halleridir.</li>
      <li>
        SATICI’nın gerekli bilgi güvenliği önlemlerini almasına karşın, <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> internet sitesine veya sisteme yapılan siber saldırılar sonucunda kişisel bilgilerin zarar görmesi veya üçüncü kişilerin eline geçmesi durumunda SATICI’nın herhangi bir hukuki ve/veya cezai sorumluluğu olmayacaktır.</li>
    </ul>
    Satıcı, Alıcı’nın web sitesinde yayınlamış olduğu Gizlilik Politikası ve Kişisel Verilerin Korunması metnini okuyup kabul ettiğini beyan ve taahhüt eder.<br>
    <strong>MADDE 12 - KİŞİSEL VERİLERİN KORUNMASI</strong><br>
    Satıcı, Sözleşme kapsamında Alıcı’ya yahut üçüncü kişilere ilişkin elde edilen kişisel verilerin saklanmasından ve güvenliğinden sorumludur. Taraflardan her biri, Sözleşme kapsamında diğer tarafça kendisiyle paylaşılabilecek olan 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat uyarınca “kişisel veri” olarak tanımlanan her türlü verilere ilişkin KVKK ve ilgili mevzuatta yer alan tüm yasal gereklilikleri yerine getireceğini kabul, beyan ve taahhüt eder.<br>
    Satıcı, veri sorumlusu olarak&nbsp;AYDINLATMA METNİ ile açıkça bilgi sunulduğu üzere elde ettiği kişisel verileri, (özel nitelikli kişisel veriler de dahil) kişisel verilerin işlenmesi politikasına uygun olarak, T.C. Anayasası, KVKK ve kişisel verilere ilişkin diğer yerel mevzuat, 108 sayılı Avrupa Konseyi Sözleşmesi, Avrupa Veri Koruma Tüzüğü(GDPR) hükümleri ve bu alandaki diğer uluslararası standartlara bağlı şekilde işler, aktarır, resmi merciler ile paylaşır,&nbsp;KİŞİSEL VERİ SAKLAMA VE İMHA POLİTİKASI’na bağlı olarak saklar ve imha eder.<br>
    Elde edilen hangi kişisel verilerin, nasıl ve hangi hukuki amaçlarla işlendiği, hangi sürelerle saklandığı, kimlere hangi hukuki amaçlarla aktarıldığı, veri sahibinin hakları ve taleplerini veri sorumlusuna nasıl ileteceği, ne kadar sürede cevaplanacağı vb. bilgilerin tamamı için Alıcı, Aydınlatma Metni’ne uygun olarak bilgilendirilmiş olduğunu, bu bilgilere istediği an erişebileceğini kabul ve beyan eder.<br>
    <strong>MADDE 14 - ALICININ BEYAN VE TAAHHÜTLERİ</strong><br>
    Alıcı, Web sitesinde yer alan Sözleşme konusu Malın/Hizmetin temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimat ve kargo bedeline ilişkin olarak Satıcı tarafından yüklenen ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder. Alıcılar, Tüketici sıfatıyla talep ve şikâyetlerini yukarıda yer alan Satıcı iletişim bilgilerine ve/veya Web sitesinin sağladığı kanallarla ulaştırabilirler. Alıcı, işbu Sözleşmeyi ve Ön Bilgilendirme Formunu elektronik ortamda teyit etmekle, mesafeli sözleşmelerin akdinden önce Satıcı tarafından Alıcıya verilmesi gereken adres, siparişi verilen Mal/Hizmete ait temel özellikler, Mal/Hizmet‘in vergiler dâhil fiyatı, ödeme ve teslimat ile teslimat fiyatı bilgilerini de doğru ve eksiksiz olarak edindiğini teyit etmiş olur. Alıcı'nın, Sözleşme konusu Mal/hizmeti teslim almadan önce muayene etmeksizin; tahrip olmuş, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı Mal/Hizmeti kargo şirketinden teslim alması halinde sorumluluk tamamen kendisine aittir. Alıcı tarafından kargo şirketi görevlisinden teslim alınan Mal/Hizmet‘in hasarsız ve sağlam olduğu kabul edilecektir. Teslimden sonra Mal/Hizmet‘in sorumluluğu ve hasarlar Alıcı'ya aittir. Mal/Hizmet‘in tesliminden sonra Alıcı'ya ait kredi kartının Alıcı'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşunun Mal/Hizmet bedelini Satıcı’ya ödememesi halinde, Alıcı kendisine teslim edilmiş olması kaydıyla Mal/Hizmet’i 3 (üç) gün içinde Satıcı’ya iade etmekle yükümlüdür. Bu halde teslimat giderleri Alıcı'ya aittir.<br>
    <strong>MADDE 15 - UYUŞMAZLIKLARIN ÇÖZÜMÜ</strong><br>
    İşbu Mesafeli Satış Sözleşmesi'nin uygulanmasında, Gümrük ve Ticaret Bakanlığınca ilan edilen değere kadar Satıcı’nın bulunduğu Antalya Tüketici Hakem Heyetleri ile Tüketici Mahkemeleri yetkilidir. 6502 Sayılı Tüketicinin Korunması Hakkında Kanun'un 68. Maddesinin 1. fıkrasında belirtilen alt ve üst limitler doğrultusunda tüketici talepleri hakkında ilçe/il tüketici hakem heyetleri yetkilidir.<br>
    <strong>MADDE 16 - TEMERRÜD HALİ VE HUKUKİ SONUÇLARI</strong><br>
    Alıcı'nın, kredi kartı ile yapmış olduğu işlemlerde temerrüde düşmesi halinde kart sahibi bankanın kendisi ile yapmış olduğu kredi kartı sözleşmesi çerçevesinde faiz ödeyecek ve bankaya karşı sorumlu olacaktır. Bu durumda ilgili banka hukuki yollara başvurabilir; doğacak masrafları ve vekâlet ücretini Alıcı'dan talep edebilir ve her koşulda Alıcı'nın borcundan dolayı temerrüde düşmesi halinde, Alıcı'nın borcu gecikmeli ifasından dolayı satıcının uğradığı zarar ve ziyandan Alıcı sorumlu olacaktır.<br>
    <strong>MADDE 17 – BİLDİRİMLER ve DELİL SÖZLEŞMESİ</strong><br>
    İşbu Sözleşme kapsamında Taraflar arasında yapılacak her türlü yazışma, mevzuatta sayılan zorunlu haller dışında, e-mail aracılığıyla yapılacaktır. Alıcı, işbu Sözleşme’den doğabilecek ihtilaflarda satıcının resmi defter ve ticari kayıtlarıyla, kendi veri tabanında, sunucularında tuttuğu elektronik bilgilerin ve bilgisayar kayıtlarının, bağlayıcı, kesin ve münhasır delil teşkil edeceğini, bu maddenin Hukuk Muhakemeleri Kanunu'nun 193. maddesi anlamında delil sözleşmesi niteliğinde olduğunu kabul, beyan ve taahhüt eder.<br>
    <strong>MADDE&nbsp; 18 - DİĞER HÜKÜMLER</strong><br>
    Satıcı’ya ait Satış Platformu ve hizmet sunulan diğer alanlarda yer alan her türlü bilgi, yazılım, içerik, tasarım, sunum, çizim, görsel, işitsel kayıtlar ile bunların düzenlenmesi, revizyonu ve kısmen/tamamen kullanım şekli ve sunumu konusunda; üçüncü şahıslara ait olanlar hariç; 5846 s. Kanun’dan kaynaklı eser sahibinin tüm ekonomik ve manevi hakları ile 6769 s. Kanun gereği fikri-sınai mülkiyet hakları, Satıcı’ya aittir. Bu gayri maddi hakları ihlal edecek şekilde sayılan ürünler izinsiz bir biçimde tamamen veya kısmen kopyalanamaz, umuma iletilemez, çoğaltılamaz, kullanılamaz, işlenemez.<br>
    Alıcı, Satıcı’nın unvanını ve iletişim bilgilerini, Satış Platformu’nda sunulan Sözleşme konusu Bilet’in/Bilet’lerin temel niteliklerini, KDV ve diğer her türlü ek bedel ile Türk Lirası cinsinden satış bedelini, teslimat şartlarını, ödeme şeklini, Etkinlik ve Mekân’a ilişkin farklılaşabilecek kuralların olabileceğini, cayma hakkının kullanılamayacağını ve uyuşmazlık halinde başvurabileceği hukuki yolları doğru ve eksiksiz olarak okuyup bilgi sahibi olduğunu ve elektronik ortamda Bilet satışının gerçekleşmesine dair Ön Bilgilendirme Formu’nda da yer alan Sözleşmenin akdinden önce, Satıcı tarafından kendisine verilmesi gereken şartlara onay verdiğini beyan eder.<br>
    &nbsp;</div>
  <br>
  
          <p></p>
      </div>
  </section>
  
  
  
  
      </main>`


  htmlPrivacy = `<main id="tt-pageContent">

        


      <br><br>
      <section class="altsayfa-baslik baskandan">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <h3>KVKK Aydınlatma Metni</h3>
                  </div>
              </div>
      
          </div>
      </section>
      <section class="event-detail container event-detail--baskandan">
          <div class="event-detail__head row">
              <div class="event-detail__head__visual col-12 col-lg-8">
                  <img alt="">
              </div>
          </div>
          <div class="event-detail__body event-detail__body--baskandan">
              <p>
                  </p><div>
        <div>
          <strong>KİŞİSEL VERİLERİN KORUNMASI AYDINLATMA METNİ</strong><br>
          Kişisel verilerinizin korunması 6698 sayılı Kişisel Verilerin Korunması Kanunu (“<strong>Kanun</strong>”) uyarınca veri sorumlusu sıfatıyla hareket eden Galeri Kristal Turizm İnşaat Pazarlama ve Ticaret A.Ş’nin (“<strong>Şirket</strong>”) en önemli öncelikleri arasındadır.<br>
          İşbu Aydınlatma Metni doğrultusunda <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> internet sitesi dâhil olmak üzere Şirketimiz tarafından işlenen kişisel verilere yönelik sizleri aydınlatılarak Kanun uyarınca gerekli şeffaflığın sağlanması amaçlanmaktadır.<br>
          <ol>
            <li>
              <strong>KİŞİSEL VERİLERİN İŞLENME AMACI VE HUKUKİ SEBEP</strong></li>
          </ol>
          Şirketimizin sunmuş olduğu ürün ve hizmetlerden faydalanmanız sırasında aşağıda detaylı şekilde açıklanan kişisel verileriniz Kanun’un 4 üncü maddesinde temel ilkelere uygun olarak işlenmektedir.<br>
          <table border="1" cellpadding="0" cellspacing="0" style="width:100.0%;" width="100%">
            <tbody>
              <tr>
                <td colspan="2" style="width:282px;">
                  <strong>Kişisel Verilerinizin İşlenme Amacı</strong></td>
                <td style="width:170px;">
                  <strong>Kişisel Verileriniz</strong></td>
                <td style="width:151px;">
                  <strong>Hukuki Sebep</strong></td>
              </tr>
              <tr>
                <td rowspan="4" style="width:121px;height:267px;">
                  <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> <strong>İnternet Sitesi Veya</strong> <strong>Mobil Uygulama Üyeliğinizin Olması Durumunda</strong></td>
                <td style="width:161px;height:267px;">
                  • Üyelik işlemlerinin (<em>üyelik oluşturulması, iptali veya bilgi güncelleme</em>) gerçekleştirilmesi,</td>
                <td style="width:170px;height:267px;">
                  Kimlik Bilgileriniz (<em>Ad Soyad, TCKN</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:151px;height:267px;">
                  Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</td>
              </tr>
              <tr>
                <td style="width:161px;">
                  • İnternet sitesi üzerinden mobil ödeme yapabilmenizi sağlamak</td>
                <td style="width:170px;">
                  Finansal Bilgi (<em>Kart Bilgileri)</em></td>
                <td style="width:151px;">
                  Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</td>
              </tr>
              <tr>
                <td style="width:161px;">
                  •Fatura düzenlenmesi veya fatura iptali işlemlerinin yerine getirilmesi</td>
                <td style="width:170px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, TCKN</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)</td>
                <td style="width:151px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</td>
              </tr>
              <tr>
                <td style="width:161px;">
                  • İletişim izinlerinizi yönetmenizi sağlanmak</td>
                <td style="width:170px;">
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta</em>)<br>
                  Kullanıcı Bilgisi (<em>İzin Durum Bilgisi</em>)</td>
                <td style="width:151px;">
                  Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:121px;">
                  <strong>Kişisel Bilgilerinizin Güvenliğinin Sağlanması</strong></td>
                <td style="width:161px;">
                  •Kişisel verilerinizin korunması için gerekli veri güvenliği önlemlerinin alınması<br>
                  •İletişim bilgilerinin doğruluğunun sağlanması</td>
                <td style="width:170px;">
                  İşlem Güvenliği Bilgisi (şifre bilgileri)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta</em>)</td>
                <td style="width:151px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</td>
              </tr>
              <tr>
                <td style="width:121px;">
                  <strong>Kullanıcı Desteği Sağlanması</strong><br>
                  &nbsp;</td>
                <td style="width:161px;">
                  •Taleplerinizin alınması, sonuçlandırılması, gerekli desteğin sağlanması,</td>
                <td style="width:170px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Kullanıcı Bilgisi (<em>Kullanıcı Talep Veya Şikâyetleri, Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:151px;">
                  Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</td>
              </tr>
              <tr>
                <td rowspan="2" style="width:121px;">
                  <strong>Kullanıcı Desteği Sağlanması</strong><br>
                  &nbsp;<br>
                  <strong>Mevzuattan Kaynaklı Yükümlülüklerin Yerine Getirilmesi</strong></td>
                <td style="width:161px;">
                  •Kullanıcı memnuniyetinin sağlanması</td>
                <td style="width:170px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  &nbsp;<br>
                  Kullanıcı Bilgisi (<em>Kullanıcı Talep Veya Şikâyetleri, Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:151px;">
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:161px;height:270px;">
                  •Resmi kurum veya kuruşlara bilgi verilmesi, talep edilen bilgi ve belgelerin sunulması</td>
                <td style="width:170px;height:270px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, TCKN</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  &nbsp;<br>
                  Finansal Bilgi (<em>Kart Bilgileri)</em><br>
                  &nbsp;<br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:151px;height:270px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</td>
              </tr>
              <tr>
                <td rowspan="3" style="width:121px;">
                  <strong>Mevzuattan Kaynaklı Yükümlülüklerin Yerine Getirilmesi</strong><br>
                  <strong>Hukuki süreçlerin yürütümü</strong></td>
                <td style="width:161px;">
                  •Muhasebe ve finans süreçlerinin yürütülmesi</td>
                <td style="width:170px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, TCKN</em>)<br>
                  &nbsp;<br>
                  Finansal Bilgi (<em>Kart Bilgileri)</em></td>
                <td style="width:151px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</td>
              </tr>
              <tr>
                <td style="width:161px;">
                  •Denetim faaliyetlerinin yürütülmesi</td>
                <td style="width:170px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, TCKN</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Finansal Bilgi (<em>Kart Bilgileri)</em><br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:151px;">
                  &nbsp;</td>
              </tr>
              <tr>
                <td style="width:161px;height:132px;">
                  •Hukuki süreçlere konu olması durumunda takibi ve gerekli bilgilerin sunumu</td>
                <td style="width:170px;height:132px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, TCKN</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcı Talep veya Şikâyetleri</em>)</td>
                <td style="width:151px;height:132px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması<br>
                  Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.<br>
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
            </tbody>
          </table>
          &nbsp;<br>
          <ol>
            <li value="2">
              <strong>AÇIK RIZANIZ DOĞRULTUSUNDA KİŞİSEL VERİLERİNİZİN İŞLENMESİ</strong></li>
          </ol>
          <strong>Pazarlama Faaliyetleri</strong><br>
          Kanun kapsamında bazı amaçlar dâhilinde kişisel verilerin işlenebilmesi için ilgilinin açık rızasının alınmış olması gerekmektedir. Kanun’daki kişisel veri işleme şartları doğrultusunda hareket eden Şirketimiz aşağıda yer alan kişisel veri işleme amaçları doğrultusunda üzere kişisel verilerinizi ancak onay vermiş olmanız halinde,<br>
          <ul>
            <li>
              Hizmetlerimizin sizlerin beğenilerinize, kullanım alışkanlıklarınıza ve ihtiyaçlarınıza göre özelleştirilerek sizlere önerilmesi; analiz, segmentasyon veya hedefleme çalışmalarının yürütülmesi; size özel ürün veya hizmet tekliflerinin, yeni ürün duyurularının, kampanyaların, promosyonların sunumu ile diğer pazarlama aktivitelerinin yürütülmesi; anket ve müşteri memnuniyet ölçümü çalışmalarının gerçekleştirilmesi ve bu kapsamda sizlerle elektronik yollarla iletişime geçilmesi amaçları ile işlenebilecek ve amaçlar doğrultusunda hizmet aldığımız üçüncü kişi tedarikçilerimizle paylaşılabilecektir.</li>
            <li>
              Şirket; tanıtım, pazarlama ve reklam faaliyetleri kapsamında mekanda genel görüntü kaydı ve canlı yayın çalışmaları yapmaktadır. Bu kapsamda&nbsp; mekanda genel görüntü kaydı ve çekimler esnasında, genel izleyici kitlesi ile beraber görüntü kayıtlarınız alınabilmekte olup, buna ilişkin kişisel verileriniz&nbsp; 6698 sayılı Kişisel Verilerin Korunması Kanunu ve 5846 Fikir ve Sanat Eserleri Kanunu uyarınca hukuka uygun şekilde işlenmektedir. Açık rızanız olması halinde görüntü kayıtlarınıza ilişkin kişisel verileriniz, şirketimizin sosyal medya hesaplarında, kurumsal internet adreslerinde pazarlama, tanıtım ve reklam faaliyetlerinde kullanılabilecektir.</li>
          </ul>
          <ol>
            <li value="3">
              <strong>KİŞİSEL VERİ TOPLAMANIN YÖNTEMİ VE HUKUKİ SEBEBİ</strong></li>
          </ol>
          Kişisel verileriniz, işbu Aydınlatma Metninin birinci başlığı altında yer verilen amaçların yerine getirilmesi kapsamında yukarıda belirtilen hukuki sebepler doğrultusunda <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> internet sitesi, Çağrı Merkezi, WhatsApp, ChatBot, E-posta ve Sosyal Medya vasıtaları ile elde edilmektedir.<br>
          <ol>
            <li value="4">
              <strong>KİŞİSEL VERİLERİNİZİN AKTARILDIĞI TARAFLAR</strong></li>
          </ol>
          Kişisel verileriniz Kanun’un kişisel verilerin aktarımına ilişkin maddesinde belirtilen şartlara uygun şekilde, aşağıdaki kişilere belirtilen amaçlar doğrultusunda aktarılabilecektir.<br>
          <table border="1" cellpadding="0" cellspacing="0" style="width:100.0%;" width="100%">
            <tbody>
              <tr>
                <td style="width:202px;height:109px;">
                  <strong>Aktarılma Amacı</strong></td>
                <td style="width:262px;height:109px;">
                  <strong>Aktarılan Kişisel Verileriniz</strong></td>
                <td style="width:139px;height:109px;">
                  <strong>Hukuki Sebep</strong></td>
              </tr>
              <tr>
                <td style="width:202px;height:236px;">
                  <a href="https://cosmostheatre.com/tr">https://cosmostheatre.com/tr</a> internet sitesi üyeliğiniz olması durumunda bilgi teknolojileri kapsamında yazılım, bakım, güvenlik ve kişisel verileri barındırma - konularında hizmet alınan tedarikçilerimiz.</td>
                <td style="width:262px;height:236px;">
                  Kimlik Bilgileriniz (<em>Ad Soyad, TCKN</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Finansal Bilgi (<em>Kart Bilgileri)</em><br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:139px;height:236px;">
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:202px;">
                  Çağrı merkezi kanalı ile taleplerinizin sonuçlandırılması amaçlı hizmet alınan tedarikçilerimiz</td>
                <td style="width:262px;">
                  Kimlik Bilgileriniz (<em>Ad Soyad</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Kullanıcı Bilgisi (<em>Kullanıcı Talep Veya Şikâyetleri, Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:139px;">
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:202px;height:234px;">
                  WhatsApp, Chatbot aracılığı ile talep ve şikâyetlerinizin alınması ve sonuçlandırılması amaçlı hizmet alınan tedarikçilerimiz</td>
                <td style="width:262px;height:234px;">
                  Kimlik Bilgileriniz (<em>Ad Soyad</em>)<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  Kullanıcı Bilgisi (<em>Kullanıcı Talep Veya Şikâyetleri, Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:139px;height:234px;">
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:202px;">
                  Sosyal Medya kanalı ile taleplerinizin sonuçlandırılması amaçlı hizmet alınan tedarikçilerimiz</td>
                <td style="width:262px;">
                  Kimlik Bilgileriniz (<em>Ad Soyad</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  &nbsp;<br>
                  Kullanıcı Bilgisi (<em>Kullanıcı Talep Veya Şikâyetleri, Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:139px;">
                  İlgili kişinin kendisi tarafından alenileştirilmiş olması.</td>
              </tr>
              <tr>
                <td style="width:202px;height:186px;">
                  Tarafınıza ileti gönderilmesi amaçlı hizmet alınan tedarikçilerimiz</td>
                <td style="width:262px;height:186px;">
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta</em>)<br>
                  &nbsp;<br>
                  Kullanıcı Bilgisi (<em>İzin Durum Bilgisi</em>)</td>
                <td style="width:139px;height:186px;">
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:202px;">
                  Hukuki yükümlülüklerimiz kapsamında kanunen yetkili kamu kurumları ile kanunen yetkili özel kurumlar ile hukuki destek aldığımız iş ortaklarımız</td>
                <td style="width:262px;">
                  Kimlik Bilgileriniz (<em>Ad Soyadı, &nbsp;TCKN</em>)<br>
                  &nbsp;<br>
                  İletişim Bilgileri (<em>Cep Telefonu Numarası, E-posta, Adres</em>)<br>
                  &nbsp;<br>
                  Finansal Bilgi (<em>Kart Bilgileri)</em><br>
                  &nbsp;<br>
                  Kullanıcı Bilgisi (<em>Araç Bilgisi, Kullanıcının Hizmet Aldığı İstasyon Bilgisi, Kullanıcının Hizmet Aldığı Tarih Bilgisi</em>)</td>
                <td style="width:139px;">
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması<br>
                  &nbsp;<br>
                  Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.<br>
                  &nbsp;<br>
                  Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</td>
              </tr>
              <tr>
                <td style="width:202px;">
                  &nbsp;</td>
                <td style="width:262px;">
                  &nbsp;</td>
                <td style="width:139px;">
                  &nbsp;</td>
              </tr>
            </tbody>
          </table>
          &nbsp;<br>
          <ol>
            <li value="5">
              <strong>İlgili Kişinin Olarak Haklarınız</strong></li>
          </ol>
          İlgili kişi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahip olduğunuzu bildiririz:<br>
          <ul>
            <li>
              Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>
              Kişisel verilerinizin işlenmesi halinde buna ilişkin bilgi talep etme,</li>
            <li>
              Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>
              Yurt içinde veya yurt dışında kişisel verilerinin aktarıldığı üçüncü kişileri bilme,</li>
            <li>
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
            <li>
              Kanun’da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
            <li>
              Eksik veya yanlış olarak işlenmiş kişisel verilerinizin düzeltildiğinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>
              Kişisel verilerinizin silindiğinin veya yok edildiğinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>
              İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonuç ortaya çıkmasına itiraz etme,</li>
            <li>
              Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
          </ul>
          Yukarıda yer alan haklarınıza ilişkin taleplerinizi aşağıdaki iletişim adreslerine iletebilirsiniz.<br>
          <strong>Posta Adresi : </strong>Altınova Sinan Mah. Serik Cad. No:113 Kepez/Antalya<br>
          <strong>E-mail Adresi : </strong><a href="mailto:info@cosmostheatre.com">info@cosmostheatre.com</a><br>
          &nbsp;<br>
          KVKK’nın 13’üncü maddesinin birinci fıkrası uyarınca; veri sorumlusu olan Şirketimize bu haklara ilişkin olarak yapılacak başvuruların yazılı olarak veya Kişisel Verilerin Korunması Kurulu (“Kurul”) tarafından belirlenen diğer yöntemlerle tarafımıza iletilmesi gerekmektedir. Yukarıdaki haklarınız kapsamında başvurularınızı şirketimize daha önce bildirilen ve şirketimiz sisteminde kayıtlı bulunan elektronik posta adresini veya kurumsal e-posta adresinizi kullanarak <a href="mailto:info@cosmostheatre.com">info@cosmostheatre.com</a> adresine, <a>…….@.....kep.tr</a><a href="#_msocom_1" id="_anchor_1" name="_msoanchor_1" uage="JavaScript">[CB1]</a>&nbsp;. &nbsp;veya yazılı olarak Altınova Sinan Mah. Serik Cad. No:113 Kepez/Antalya adresine iletebilirsiniz. &nbsp;<br>
          Yapılacak olan başvuruda; (i) ad, soyad ve başvuru yazılı ise imza, (ii) Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numarası, yabancılar için uyruğu, pasaport numarası veya varsa kimlik numarası, (iii) tebligata esas yerleşim yeri veya iş yeri adresi, (iv) varsa bildirime esas elektronik posta adresi, telefon ve faks numarası ve (v) talep konusunun bulunması kanunen zorunludur.<br>
          KVKK’nın 10. Maddesi kapsamında aydınlatma yükümlülüğü uyarınca Şirketimiz tarafından bilgilendirildiğinizi ve metinde belirtilen hususları anladığınızı kabul etmektesiniz.&nbsp;<br>
          İşbu Aydınlatma Metni, gerekli görüldüğü hallerde Şirketimiz tarafından revize edilebilir<strong>. Revizyonun söz konusu olduğu hallerde ise, bu hususa ilişkin olarak tarafınıza bilgilendirme yapılacaktır.</strong><br>
          &nbsp;<br>
          <div>
            <hr align="left" size="1" width="33%">
            <div>
              <div id="_com_1" uage="JavaScript">
                &nbsp;<a href="#_msoanchor_1">[CB1]</a>KVKK için Galeri Kristal KEP adresimizi de belirtelim</div>
            </div>
          </div>
        </div>
      </div>
      <br>
      
              <p></p>
          </div>
      </section>
      
      
      
      
          </main>`;
  htmlCookie = `<main id="tt-pageContent">

        


      <br><br>
      <section class="altsayfa-baslik baskandan">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <h3>Cookie Policy</h3>
                  </div>
              </div>
      
          </div>
      </section>
      <section class="event-detail container event-detail--baskandan">
          <div class="event-detail__head row">
              <div class="event-detail__head__visual col-12 col-lg-8">
                  <img alt="">
              </div>
          </div>
          <div class="event-detail__body event-detail__body--baskandan">
              <p>
                  İnternet sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek adına çoğu web sitesinde olduğu gibi biz de www.cosmostheatre.com ’da çerez kullanmaktayız. Bu Çerez Kullanımı Politikası, tüm web sitesi ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi koşullarda kullanıldığını açıklamaktadır.<br>
      &nbsp;<br>
      <strong>Çerez Nedir?</strong><br>
      &nbsp;<br>
      Çerezler, bilgisayarınız ya da mobil cihazınız üzerinden ziyaret ettiğiniz internet siteleri tarafından cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.<br>
      &nbsp;<br>
      <strong>Çerezlerde Hangi Tür Veriler İşlenir?</strong><br>
      &nbsp;<br>
      İnternet sitelerinde yer alan çerezlerde, türüne bağlı olarak, siteyi ziyaret ettiğiniz cihazdaki tarama ve kullanım tercihlerinize ilişkin veriler toplanmaktadır. Bu veriler, eriştiğiniz sayfalar, incelediğiniz hizmet ve ürünler, tercih ettiğiniz dil seçeneği ve diğer tercihlerinize dair bilgileri kapsamaktadır.<br>
      &nbsp;<br>
      <strong>Çerezler Hangi Amaçlarla Kullanılmaktadır?</strong><br>
      &nbsp;<br>
      Sitede tercih ettiğiniz dil ve diğer ayarları içeren bu küçük metin dosyaları, siteye bir sonraki ziyaretinizde tercihlerinizin hatırlanmasına ve sitedeki deneyiminizi iyileştirmek için hizmetlerimizde geliştirmeler yapmamıza yardımcı olur. Böylece bir sonraki ziyaretinizde daha iyi ve kişiselleştirilmiş bir kullanım deneyimi yaşayabilirsiniz.<br>
      &nbsp;<br>
      <strong>İnternet sitemizde çerez kullanımının başlıca amaçları ise şöyledir:</strong><br>
      &nbsp;<br>
      </p><ul>
        <li>
          İnternet sitesinin performansını arttırmak</li>
        <li>
          Site üzerinden sizlere sunulan hizmetleri geliştirmek ve kolaylaştırmak,</li>
        <li>
          Site üzerinden yeni özellikler sunmak ve özellikleri tercihlerinize göre kişiselleştirmek,</li>
        <li>
          Sizin ve şirketimizin hukuki ve ticari güvenliğini sağlamak,</li>
        <li>
          Site üzerinden sahte işlemlerin gerçekleştirilmesini önlemek,</li>
        <li>
          5651 sayılı Internet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun ve Internet Ortamında Yapılan Yayınların Düzenlenmesine Dair Usul ve Esaslar Hakkında Yönetmelik'ten kaynaklananlar başta olmak üzere, kanuni ve sözleşmesel yükümlülüklerini yerine getirmek.</li>
      </ul>
      <br>
      <strong>Çerez Türleri:</strong><br>
      &nbsp;<br>
      <strong>Saklandığı Süre Bakımından Çerez Türleri:</strong><br>
      <strong>Oturum Çerezleri:</strong><br>
      Oturum çerezlerini ziyaretinizi süresince internet sitesinin düzgün bir şekilde çalışmasını sağlamaktadır. Sitelerimizin ve sizin, ziyaretinizde güvenliğini, sürekliliğini sağlamak gibi amaçlarla kullanılırlar. Oturum çerezleri geçiçi çerezlerdir, siz tarayıcınızı kapatıp sitemize tekrar geldiğinizde silinir, kalıcı değillerdir.<br>
      &nbsp;<br>
      <strong>Kalıcı Çerezler:</strong><br>
      Bu çerezler bilgileriniz ve seçimlerinizin bir sonraki ziyaretinizde internet sitemiz tarafından hatırlanmasına yardımcı olurlar. Kalıcı çerezler, sitemizi ziyaret ettiğiniz tarayıcınızı kapattıktan veya bilgisayarınızı yeniden başlattıktan sonra bile saklı kalır. Tarayıcınızın ayarlarından silinene kadar bu çerezler tarayıcınızın alt klasörlerinde tutulurlar.<br>
      &nbsp;<br>
      <strong>Kullanım Bakımından Çerez Türleri:</strong><br>
      &nbsp;<br>
      <strong>Birinci ve Üçüncü Kişi Çerezler:</strong><br>
      Birinci kişi çerezler sitemiz tarafından kullanılan çerezlerdir. Üçüncü kişi çerezler ise sitemiz haricinde bilgisayarınıza kurulan çerezlerdir. İnternet sitemizde hem birinci hem de üçüncü taraf kişi çerezleri kullanılmaktadır.<br>
      &nbsp;<br>
      <strong>İşlev Çerezleri:</strong><br>
      İşlev Çerezleri internet sitesindeki ziyaretinizi kolaylaştırmak ve site üzerindeki deneyiminizi geliştirmek için kullanılan çerezlerdir. Bu çerezler internet sitesine yaptığınız bir önceki ziyareti hatırlayarak içeriklere rahatça erişmenizi sağlar.<br>
      &nbsp;<br>
      <strong>Analitik Çerezler:</strong><br>
      Analitik Çerezler, hangi sayfalarımızın daha fazla ilgi çektiğini, hangi kaynakların daha çok görüntülendiğini görmemize yarayan, sitelerimizdeki trafiği görerek bu trafiğe uygun hizmet sağlamamızı sağlayan veriler içerir. Bu nitelikte kullanılan çerezler bilgiyi anonim olarak depolar.<br>
      &nbsp;<br>
      <strong>Reklam Çerezleri:</strong><br>
      Reklam ya da diğer adıyla Hedefleme çerezleri, ilgi alanınıza yakın olan içerikleri tespit etmemizi ve sunmamızı sağlayan çerezlerdir. Sizi tanıyabilmemiz ve size özel reklamlar sunabilmek adına web sitemize ve mobil sitemize, reklam verdiğimiz diğer web sitelerine üçüncü taraf reklam çerezleri yerleştirilebilir. Bu çerezler ayrıca reklamlarımızın verimliliğini ölçmek için kullanılmaktadır.<br>
      &nbsp;<br>
      <strong>Çerezlerin Kullanılmasını Nasıl Engelleyebilirsiniz?</strong><br>
      &nbsp;<br>
      Çoğu tarayıcı çerezleri otomatik olarak kabul eder. Ancak dilerseniz çerezleri tarayıcınızın ayarlarını değiştirerek reddedebilirsiniz. Çerezleri reddettiğiniz takdirde sitemizdeki bazı özelliklerin ve hizmetlerin düzgün çalışamayabileceğini, sitemizin kişiselleştirilemeyebileceğini ve sizin deneyiminize göre özelleştirilemeyeceğini lütfen unutmayınız.<br>
      &nbsp;<br>
      Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Tarayıcı üreticileri, kendi ürünlerinde çerezlerin yönetimi ile ilgili yardım sayfaları sunmaktadır. Daha fazla bilgi için lütfen tıklayınız:<br>
      &nbsp;<br>
      <strong>Google Chrome:</strong><br>
      <a href="https://support.google.com/chrome/answer/95647?hl=tr">https://support.google.com/chrome/answer/95647?hl=tr</a><br>
      &nbsp;<br>
      <strong>Mozilla Firefox:</strong><br>
      <a href="https://support.mozilla.org/tr/kb/%C3%87erezleri%20engellemek">https://support.mozilla.org/tr/kb/%C3%87erezleri%20engellemek</a><br>
      &nbsp;<br>
      <strong>Internet Explorer:</strong><br>
      <a href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies</a><br>
      &nbsp;<br>
      <strong>Opera:</strong><br>
      <a href="https://www.opera.com/tr/help">https://www.opera.com/tr/help</a><br>
      &nbsp;<br>
      <strong>Opera Mobil:</strong><br>
      <a href="https://www.opera.com/tr/help/mobile/android">https://www.opera.com/tr/help/mobile/android</a><br>
      &nbsp;<br>
      <strong>Safari Bilgisayar:</strong><br>
      <a href="https://support.apple.com/kb/PH19214?locale=tr_TR&amp;viewlocale=tr_TR">https://support.apple.com/kb/PH19214?locale=tr_TR&amp;viewlocale=tr_TR</a><br>
      &nbsp;<br>
      <strong>Safari Mobil:</strong><br>
      <a href="https://support.apple.com/tr-tr/HT201265">https://support.apple.com/tr-tr/HT201265</a><br>
      <br>
      &nbsp;<br>
      Bizimle İletişime Geçin<br>
      Çerez Politikası ile ilgili tüm soru ve görüşlerinizi iletmek için bize ulaşın.<br>
      &nbsp;<br>
      <br>
      
              <p></p>
          </div>
      </section>
      
      
      
      
          </main>`;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,

  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      const page = paramMap.get('id');
      if (page) {
        this.routePage = page;

        switch (this.routePage) {
          case 'termsofservice':
            break;
          case 'privacypolicy':
            this.html = this.htmlPrivacy;

            break;
          case 'cookiepolicy':
            this.html = this.htmlCookie;
            break;
          default:
            this._router.navigate(['/delphinaquaserenity']);
        }
      } else {
        this._router.navigate(['/delphinaquaserenity']);
      }
    });
  }
}
