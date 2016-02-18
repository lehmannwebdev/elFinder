/**
 * Polski translation
 * @author Marcin Mikołajczyk <marcin@pjwstk.edu.pl>
 * @author Wojciech Jabłoński <www.jablonski@gmail.com>
 * @author Przemysław Szustak przemyslaw.szustak@gmail.com
 * @version 2016-02-18
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.pl = {
		translator : 'Marcin Mikołajczyk &lt;marcin@pjwstk.edu.pl&gt;, Wojciech Jabłoński &lt;www.jablonski@gmail.com&gt;, Przemysław Szustak przemyslaw.szustak@gmail.com',
		language   : 'Polski',
		direction  : 'ltr',
		dateFormat : 'd M Y H:i', // Mar 13, 2012 05:27 PM
		fancyDateFormat : '$1 H:i', // will produce smth like: Today 12:25 PM
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Błąd',
			'errUnknown'           : 'Nieznany błąd.',
			'errUnknownCmd'        : 'Nieznane polecenie.',
			'errJqui'              : 'Niepoprawna konfiguracja jQuery UI. Muszą być zawarte komponenty selectable, draggable i droppable.',
			'errNode'              : 'elFinder wymaga utworzenia obiektu DOM.',
			'errURL'               : 'Niepoprawna konfiguracja elFinder! Pole URL nie jest ustawione.',
			'errAccess'            : 'Dostęp zabroniony.',
			'errConnect'           : 'Błąd połączenia z backend.',
			'errAbort'             : 'Połączenie zostało przerwane.',
			'errTimeout'           : 'Upłynął czas oczekiwania na połączenie.',
			'errNotFound'          : 'Backend nie został znaleziony.',
			'errResponse'          : 'Nieprawidłowa odpowiedź backend.',
			'errConf'              : 'Niepoprawna konfiguracja backend.',
			'errJSON'              : 'Moduł PHP JSON nie jest zainstalowany.',
			'errNoVolumes'         : 'Brak możliwości odczytu katalogów.',
			'errCmdParams'         : 'Nieprawidłowe parametry dla polecenia "$1".',
			'errDataNotJSON'       : 'Dane nie są JSON.',
			'errDataEmpty'         : 'Dane są puste.',
			'errCmdReq'            : 'Backend wymaga podania nazwy polecenia.',
			'errOpen'              : 'Nie można otworzyć "$1".',
			'errNotFolder'         : 'Obiekt nie jest katalogiem.',
			'errNotFile'           : 'Obiekt nie jest plikiem.',
			'errRead'              : 'Nie można odczytać "$1".',
			'errWrite'             : 'Nie można zapisać do "$1".',
			'errPerm'              : 'Brak uprawnień.',
			'errLocked'            : '"$1" jest zablokowany i nie może zostać zmieniony, przeniesiony lub usunięty.',
			'errExists'            : 'Plik "$1" już istnieje.',
			'errInvName'           : 'Nieprawidłowa nazwa pliku.',
			'errFolderNotFound'    : 'Katalog nie został znaleziony.',
			'errFileNotFound'      : 'Plik nie został znaleziony.',
			'errTrgFolderNotFound' : 'Katalog docelowy "$1" nie został znaleziony.',
			'errPopup'             : 'Przeglądarka zablokowała otwarcie nowego okna. Aby otworzyć plik, zmień ustawienia przeglądarki.',
			'errMkdir'             : 'Nie można utworzyć katalogu "$1".',
			'errMkfile'            : 'Nie można utworzyć pliku "$1".',
			'errRename'            : 'Nie można zmienić nazwy "$1".',
			'errCopyFrom'          : 'Kopiowanie z katalogu "$1" nie jest możliwe.',
			'errCopyTo'            : 'Kopiowanie do katalogu "$1" nie jest możliwe.',
			'errMkOutLink'         : 'Nie można utworzyć linku poza katalogiem root.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Błąd wysyłania.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nie można wysłać "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Nie znaleziono plików do wysłania.',
			'errUploadTotalSize'   : 'Przekroczono dopuszczalny rozmiar wysyłanych plików.', // old name - errMaxSize
			'errUploadFileSize'    : 'Plik przekracza dopuszczalny rozmiar.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Niedozwolony typ pliku.',
			'errUploadTransfer'    : 'Błąd przesyłania "$1".',
			'errUploadTemp'        : 'Przesyłanie pliku - nie można utworzyć pliku tymczasowego.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Obiekt "$1" istnieje w tej lokalizacji i nie może zostać nadpisany obiektem innego typu.', // new
			'errReplace'           : 'Nie można zastąpić "$1".',
			'errSave'              : 'Nie można zapisać "$1".',
			'errCopy'              : 'Nie można skopiować "$1".',
			'errMove'              : 'Nie można przenieść "$1".',
			'errCopyInItself'      : 'Nie można skopiować "$1" w miejsce jego samego.',
			'errRm'                : 'Nie można usunąć "$1".',
			'errRmSrc'             : 'Nie można usunąć pliku(ów) źródłowych.',
			'errExtract'           : 'Nie można wypakować plików z "$1".',
			'errArchive'           : 'Nie można utworzyć archiwum.',
			'errArcType'           : 'Nieobsługiwany typ archiwum.',
			'errNoArchive'         : 'Plik nie jest prawidłowym typem archiwum.',
			'errCmdNoSupport'      : 'Backend nie obsługuje tego polecenia.',
			'errReplByChild'       : 'Nie można zastąpić katalogu "$1" elementem w nim zawartym',
			'errArcSymlinks'       : 'Ze względów bezpieczeństwa rozpakowywanie archiwów zawierających dowiązania symboliczne (symlinks) jest niedozwolone.', // edited 24.06.2012
			'errArcMaxSize'        : 'Archiwum przekracza maksymalny dopuszczalny rozmiar.',
			'errResize'            : 'Nie można zmienić rozmiaru "$1".',
			'errResizeDegree'      : 'Nieprawidłowa wartość stopnia obrotu.',  // added 7.3.2013
			'errResizeRotate'      : 'Nie można obrócić obrazu.',  // added 7.3.2013
			'errResizeSize'        : 'Nieprawidłowy rozmiar obrazu.',  // added 7.3.2013
			'errResizeNoChange'    : 'Nie zmieniono rozmiaru obrazu.',  // added 7.3.2013
			'errUsupportType'      : 'Nieobsługiwany typ pliku.',
			'errNotUTF8Content'    : 'Plik "$1" nie jest w formacie UTF-8 i nie może być edytowany.',  // added 9.11.2011
			'errNetMount'          : 'Nie można zamontować "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protokół nie jest wspierany.',     // added 17.04.2012
			'errNetMountFailed'    : 'Montowanie nie powiodło się.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Wymagany host.', // added 18.04.2012
			'errSessionExpires'    : 'Z powodu braku aktywności sesja wygasła.',
			'errCreatingTempDir'   : 'Nie można utworzyć tymczasowego katalogu: "$1"',
			'errFtpDownloadFile'   : 'Nie można pobrać pliku z FTP: "$1"',
			'errFtpUploadFile'     : 'Nie można wysłać pliku do FTP: "$1"',
			'errFtpMkdir'          : 'Nie można utworzyć katalogu w FTP: "$1"',
			'errArchiveExec'       : 'Błąd podczas archiwizacji plików: "$1"',
			'errExtractExec'       : 'Błąd podczas wypakowywania plików: "$1"',
			'errNetUnMount'        : 'Nie można zamontować', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nie można skonwertować do UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Wypróbuj Google Chrome, jeżeli chcesz wgrać katalog.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Upłynął czas podczas wyszukiwania "$1". Szukaj partiami.', // from v2.1 added 12.1.2016

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Utwórz archiwum',
			'cmdback'      : 'Wstecz',
			'cmdcopy'      : 'Kopiuj',
			'cmdcut'       : 'Wytnij',
			'cmddownload'  : 'Pobierz',
			'cmdduplicate' : 'Duplikuj',
			'cmdedit'      : 'Edytuj plik',
			'cmdextract'   : 'Wypakuj pliki z archiwum',
			'cmdforward'   : 'Dalej',
			'cmdgetfile'   : 'Wybierz pliki',
			'cmdhelp'      : 'Informacje o programie',
			'cmdhome'      : 'Katalog główny',
			'cmdinfo'      : 'Właściwości',
			'cmdmkdir'     : 'Nowy katalog',
			'cmdmkfile'    : 'Nowy plik tekstowy',
			'cmdopen'      : 'Otwórz',
			'cmdpaste'     : 'Wklej',
			'cmdquicklook' : 'Podgląd',
			'cmdreload'    : 'Odśwież',
			'cmdrename'    : 'Zmień nazwę',
			'cmdrm'        : 'Usuń',
			'cmdsearch'    : 'Wyszukaj pliki',
			'cmdup'        : 'W górę',
			'cmdupload'    : 'Wyślij pliki',
			'cmdview'      : 'Widok',
			'cmdresize'    : 'Zmień rozmiar obrazu',
			'cmdsort'      : 'Sortuj',
			'cmdnetmount'  : 'Zamontowano dysk sieciowy', // added 18.04.2012
			'cmdnetunmount': 'Odmontowano', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'W miejsce', // added 28.12.2014
			'cmdchmod'     : 'Zmień tryb', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Otwórz katalog', // from v2.1 added 13.1.2016

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zamknij',
			'btnSave'   : 'Zapisz',
			'btnRm'     : 'Usuń',
			'btnApply'  : 'Zastosuj',
			'btnCancel' : 'Anuluj',
			'btnNo'     : 'Nie',
			'btnYes'    : 'Tak',
			'btnMount'  : 'Montuj',  // added 18.04.2012
			'btnApprove': 'Przejdź do $1 & zatwierdź', // from v2.1 added 26.04.2012
			'btnUnmount': 'Odmontuj', // from v2.1 added 30.04.2012
			'btnConv'   : 'Konwertuj', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Tutaj',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Dysk',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Wszystkie',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Typ MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nazwa pliku',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Zapisz & Zamknij', // from v2.1 added 12.6.2015
			'btnBackup' : 'Kopia zapasowa', // fromv2.1 added 28.11.2015

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otwórz katalog',
			'ntffile'     : 'Otwórz plik',
			'ntfreload'   : 'Odśwież zawartość katalogu',
			'ntfmkdir'    : 'Tworzenie katalogu',
			'ntfmkfile'   : 'Tworzenie plików',
			'ntfrm'       : 'Usuwanie plików',
			'ntfcopy'     : 'Kopiowanie plików',
			'ntfmove'     : 'Przenoszenie plików',
			'ntfprepare'  : 'Przygotowanie do kopiowania plików',
			'ntfrename'   : 'Zmiana nazw plików',
			'ntfupload'   : 'Wysyłanie plików',
			'ntfdownload' : 'Pobieranie plików',
			'ntfsave'     : 'Zapisywanie plików',
			'ntfarchive'  : 'Tworzenie archiwum',
			'ntfextract'  : 'Wypakowywanie plików z archiwum',
			'ntfsearch'   : 'Wyszukiwanie plików',
			'ntfresize'   : 'Rozszerzanie obrazów',
			'ntfsmth'     : 'Robienie czegoś >_<',
			'ntfloadimg'  : 'Ładowanie obrazu',
			'ntfnetmount' : 'Montowanie dysku sieciowego', // added 18.04.2012
			'ntfnetunmount': 'Odmontowanie dysku sieciowego', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Pobranie rozmiaru obrazu', // added 20.05.2013
			'ntfreaddir'  : 'Odczyt informacji o katalogu', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Pobieranie URL linku', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Zmiana trybu pliku', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Sprawdzanie nazwy przesyłanego pliku', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Tworzenie pliku do pobrania', // from v2.1.7 added 23.1.2016

			/************************************ dates **********************************/
			'dateUnknown' : 'nieznana',
			'Today'       : 'Dzisiaj',
			'Yesterday'   : 'Wczoraj',
			'msJan'       : 'sty',
			'msFeb'       : 'lut',
			'msMar'       : 'mar',
			'msApr'       : 'kwi',
			'msMay'       : 'maj',
			'msJun'       : 'cze',
			'msJul'       : 'lip',
			'msAug'       : 'sie',
			'msSep'       : 'wrz',
			'msOct'       : 'paź',
			'msNov'       : 'lis',
			'msDec'       : 'gru',
			'January'     : 'Styczeń',
			'February'    : 'Luty',
			'March'       : 'Marzec',
			'April'       : 'Kwiecień',
			'May'         : 'Maj',
			'June'        : 'Czerwiec',
			'July'        : 'Lipiec',
			'August'      : 'Sierpień',
			'September'   : 'Wrzesień',
			'October'     : 'Październik',
			'November'    : 'Listopad',
			'December'    : 'Grudzień',
			'Sunday'      : 'niedziela',
			'Monday'      : 'poniedziałek',
			'Tuesday'     : 'wtorek',
			'Wednesday'   : 'środa',
			'Thursday'    : 'czwartek',
			'Friday'      : 'piątek',
			'Saturday'    : 'sobota',
			'Sun'         : 'nie',
			'Mon'         : 'pon',
			'Tue'         : 'wto',
			'Wed'         : 'śro',
			'Thu'         : 'czw',
			'Fri'         : 'pią',
			'Sat'         : 'sob',

			/******************************** sort variants ********************************/
			'sortname'          : 'po nazwie',
			'sortkind'          : 'po typie',
			'sortsize'          : 'po rozmiarze',
			'sortdate'          : 'po dacie',
			'sortFoldersFirst'  : 'Lista katalogów',

			/********************************** new items **********************************/
			'untitled file.txt' : 'NowyPlik.txt', // added 10.11.2015
			'untitled folder'   : 'NowyKatalog',   // added 10.11.2015
			'Archive'           : 'NoweArchiwum',  // from v2.1 added 10.11.2015

			/********************************** messages **********************************/
			'confirmReq'      : 'Wymagane potwierdzenie',
			'confirmRm'       : 'Czy na pewno chcesz usunąć pliki?<br/>Tej operacji nie można cofnąć!',
			'confirmRepl'     : 'Zastąpić stary plik nowym?',
			'confirmConvUTF8' : 'Nie UTF-8<br/>Konwertować do UTF-8?<br/>Zawartość zmieni się na UTF-8 przez zapisu po konwersji.', // from v2.1 added 08.04.2014
			'confirmNotSave'  : 'Zmodyfikowano.<br/>Jeżeli nie zapiszesz to zmiany zostaną utracone.', // from v2.1 added 15.7.2015
			'apllyAll'        : 'Zastosuj do wszystkich',
			'name'            : 'Nazwa',
			'size'            : 'Rozmiar',
			'perms'           : 'Uprawnienia',
			'modify'          : 'Zmodyfikowany',
			'kind'            : 'Typ',
			'read'            : 'odczyt',
			'write'           : 'zapis',
			'noaccess'        : 'brak dostępu',
			'and'             : 'i',
			'unknown'         : 'nieznany',
			'selectall'       : 'Zaznacz wszystkie pliki',
			'selectfiles'     : 'Zaznacz plik(i)',
			'selectffile'     : 'Zaznacz pierwszy plik',
			'selectlfile'     : 'Zaznacz ostatni plik',
			'viewlist'        : 'Widok listy',
			'viewicons'       : 'Widok ikon',
			'places'          : 'Ulubione',
			'calc'            : 'Oblicz',
			'path'            : 'Ścieżka',
			'aliasfor'        : 'Alias do',
			'locked'          : 'Zablokowany',
			'dim'             : 'Wymiary',
			'files'           : 'Pliki',
			'folders'         : 'Katalogi',
			'items'           : 'Elementy',
			'yes'             : 'tak',
			'no'              : 'nie',
			'link'            : 'Odnośnik',
			'searcresult'     : 'Wyniki wyszukiwania',
			'selected'        : 'Zaznaczonych obiektów',
			'about'           : 'Informacje o programie',
			'shortcuts'       : 'Skróty klawiaturowe',
			'help'            : 'Pomoc',
			'webfm'           : 'Menedżer plików sieciowych',
			'ver'             : 'Wersja',
			'protocolver'     : 'wersja wydania',
			'homepage'        : 'Strona główna projektu',
			'docs'            : 'Dokumentacja',
			'github'          : 'Obserwuj rozwój projektu na Github',
			'twitter'         : 'Śledź nas na Twitterze',
			'facebook'        : 'Dołącz do nas na Facebooku',
			'team'            : 'Autorzy',
			'chiefdev'        : 'główny programista',
			'developer'       : 'programista',
			'contributor'     : 'współautor',
			'maintainer'      : 'koordynator',
			'translator'      : 'tłumacz',
			'icons'           : 'Ikony',
			'dontforget'      : 'i nie zapomnij zabrać ręcznika',
			'shortcutsof'     : 'Skróty klawiaturowe są wyłączone',
			'dropFiles'       : 'Upuść pliki tutaj',
			'or'              : 'lub',
			'selectForUpload' : 'Wybierz pliki do wysłania',
			'moveFiles'       : 'Przenieś pliki',
			'copyFiles'       : 'Kopiuj pliki',
			'rmFromPlaces'    : 'Usuń z ulubionych',
			'aspectRatio'     : 'Zachowaj proporcje',
			'scale'           : 'Skala',
			'width'           : 'Szerokość',
			'height'          : 'Wysokość',
			'resize'          : 'Zmień rozmiar',
			'crop'            : 'Przytnij',
			'rotate'          : 'Obróć',
			'rotate-cw'       : 'Obróć 90° w lewo',
			'rotate-ccw'      : 'Obróć 90° w prawo',
			'degree'          : '°',
			'netMountDialogTitle' : 'Zamontowano dysk sieciowy', // added 18.04.2012
			'protocol'            : 'Protokół', // added 18.04.2012
			'host'                : 'Host', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Użytkownik', // added 18.04.2012
			'pass'                : 'Hasło', // added 18.04.2012
			'confirmUnmount'      : 'Czy odmontowałeś $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Przeciągnij lub wklej pliki z przeglądarki', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Przeciągnij lub wklej tutaj pliki i adresy URL', // from v2.1 added 07.04.2014
			'encoding'        : 'Kodowanie', // from v2.1 added 19.12.2014
			'locale'          : 'Lokalizacja',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Cel: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Szukaj po wejściowym typie MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Właściciel', // from v2.1 added 20.6.2015
			'group'           : 'Grupa', // from v2.1 added 20.6.2015
			'other'           : 'Inni', // from v2.1 added 20.6.2015
			'execute'         : 'Wykonaj', // from v2.1 added 20.6.2015
			'perm'            : 'Uprawnienia', // from v2.1 added 20.6.2015
			'mode'            : 'Tryb', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Katalog jest pusty', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Katalog jest pusty\\A Przeciągnij aby dodać ', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Katalog jest pusty\\A Przytrzymaj długżej aby dodać', // from v2.1.6 added 30.12.2015
			'quality'         : 'Jakość', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Auto synchronizacja',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Przenieś do góry',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Pobierz link URL', // from v2.1.7 added 9.2.2016

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Nieznany',
			'kindFolder'      : 'Katalog',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Utracony alias',
			// applications
			'kindApp'         : 'Aplikacja',
			'kindPostscript'  : 'Dokument Postscript',
			'kindMsOffice'    : 'Dokument Office',
			'kindMsWord'      : 'Dokument Word',
			'kindMsExcel'     : 'Dokument Excel',
			'kindMsPP'        : 'Prezentacja PowerPoint',
			'kindOO'          : 'Dokument OpenOffice',
			'kindAppFlash'    : 'Aplikacja Flash',
			'kindPDF'         : 'Dokument przenośny PDF',
			'kindTorrent'     : 'Plik BitTorrent',
			'kind7z'          : 'Archiwum 7z',
			'kindTAR'         : 'Archiwum TAR',
			'kindGZIP'        : 'Archiwum GZIP',
			'kindBZIP'        : 'Archiwum BZIP',
			'kindXZ'          : 'Archiwum XZ',
			'kindZIP'         : 'Archiwum ZIP',
			'kindRAR'         : 'Archiwum RAR',
			'kindJAR'         : 'Plik Java JAR',
			'kindTTF'         : 'Czcionka TrueType',
			'kindOTF'         : 'Czcionka OpenType',
			'kindRPM'         : 'Pakiet RPM',
			// texts
			'kindText'        : 'Dokument tekstowy',
			'kindTextPlain'   : 'Zwykły tekst',
			'kindPHP'         : 'Kod źródłowy PHP',
			'kindCSS'         : 'Kaskadowe arkusze stylów',
			'kindHTML'        : 'Dokument HTML',
			'kindJS'          : 'Kod źródłowy Javascript',
			'kindRTF'         : 'Tekst sformatowany RTF',
			'kindC'           : 'Kod źródłowy C',
			'kindCHeader'     : 'Plik nagłówka C',
			'kindCPP'         : 'Kod źródłowy C++',
			'kindCPPHeader'   : 'Plik nagłówka C++',
			'kindShell'       : 'Skrypt powłoki Unix',
			'kindPython'      : 'Kod źródłowy Python',
			'kindJava'        : 'Kod źródłowy Java',
			'kindRuby'        : 'Kod źródłowy Ruby',
			'kindPerl'        : 'Skrypt Perl',
			'kindSQL'         : 'Kod źródłowy SQL',
			'kindXML'         : 'Dokument XML',
			'kindAWK'         : 'Kod źródłowy AWK',
			'kindCSV'         : 'Tekst rozdzielany przecinkami CSV',
			'kindDOCBOOK'     : 'Dokument Docbook XML',
			'kindMarkdown'    : 'Markdown tekst', // added 20.7.2015
			// images
			'kindImage'       : 'Obraz',
			'kindBMP'         : 'Obraz BMP',
			'kindJPEG'        : 'Obraz JPEG',
			'kindGIF'         : 'Obraz GIF',
			'kindPNG'         : 'Obraz PNG',
			'kindTIFF'        : 'Obraz TIFF',
			'kindTGA'         : 'Obraz TGA',
			'kindPSD'         : 'Obraz Adobe Photoshop',
			'kindXBITMAP'     : 'Obraz X BitMap',
			'kindPXM'         : 'Obraz Pixelmator',
			// media
			'kindAudio'       : 'Plik dźwiękowy',
			'kindAudioMPEG'   : 'Plik dźwiękowy MPEG',
			'kindAudioMPEG4'  : 'Plik dźwiękowy MPEG-4',
			'kindAudioMIDI'   : 'Plik dźwiękowy MIDI',
			'kindAudioOGG'    : 'Plik dźwiękowy Ogg Vorbis',
			'kindAudioWAV'    : 'Plik dźwiękowy WAV',
			'AudioPlaylist'   : 'Lista odtwarzania MP3',
			'kindVideo'       : 'Plik wideo',
			'kindVideoDV'     : 'Plik wideo DV',
			'kindVideoMPEG'   : 'Plik wideo MPEG',
			'kindVideoMPEG4'  : 'Plik wideo MPEG-4',
			'kindVideoAVI'    : 'Plik wideo AVI',
			'kindVideoMOV'    : 'Plik wideo Quick Time',
			'kindVideoWM'     : 'Plik wideo Windows Media',
			'kindVideoFlash'  : 'Plik wideo Flash',
			'kindVideoMKV'    : 'Plik wideo Matroska',
			'kindVideoOGG'    : 'Plik wideo Ogg'
		}
	};
}

