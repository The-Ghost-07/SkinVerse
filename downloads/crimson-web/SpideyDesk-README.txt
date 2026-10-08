SpideyDesk  -  Rainmeter recreation of your Spider-Man desktop mockup
=====================================================================
32 skins. Every visual element is its own skin (own folder + .ini), so each one
can be moved and resized on its own.   Needs Rainmeter 4.5 or newer (Windows 10/11).
LayoutMap.png shows where each skin lands on your original mockup.


1. INSTALL
----------
1. Install Rainmeter (rainmeter.net).
2. Copy the whole "SpideyDesk" folder into:   Documents\Rainmeter\Skins\
3. Open Rainmeter (tray icon) > "Refresh all".
4. Open Variables first:  Documents\Rainmeter\Skins\SpideyDesk\@Resources\Variables.inc
   Set ScreenWidth and ScreenHeight to your monitor's real resolution (see section 4).
5. Rainmeter > Manage > SpideyDesk > Layout > Layout.ini > Load.
6. In the small "SpideyDesk Layout" card click  [Load all].
   Every widget loads and jumps to its mockup position, centered on your screen.

Layout card buttons
  Load all     activates every skin, then moves it to its mockup position
  Re-arrange   moves all loaded skins back to the mockup positions
  Unload all   closes every SpideyDesk skin (the Layout card stays)


2. WHAT EACH SKIN DOES
----------------------
DayCard      live weekday + day number. Event text is static (Event1* variables).
Clock        live clock, format in ClockFormat (%H:%M, %I:%M %p ...)
Battery      ring + percent (PowerPlugin). A desktop PC without a battery shows 100%.
Calendar     full month grid, today highlighted. Mouse wheel = month, middle-click = today.
System       CPU, RAM, GPU bars with percentages
Visualizer   16-band spectrum of the system audio output (AudioLevel, Update=33)
Mic          4-band level meter on the microphone input port (AudioLevel, Update=33)
Music        NowPlaying: cover, title, artist, progress, previous / play-pause / next.
             The play/pause icon follows the player state.
Search       click, type, Enter = web search (InputText). Engine = SearchURL.
Wifi         Connected / Offline + green/red dot (PingPlugin, target = PingHost)
Weather      Open-Meteo (no API key): temperature, icon, description, next 4 hours.
             City / Lat / Lon / Unit are variables.
Folder1-3    desktop folders; each opens its Folder#Path
Dock*        DockBar + 10 tiles (Files, Browser, Mail, Music, Monitor, Settings,
             Notes, Calendar, Apps, Trash). Hover lifts and brightens the tile;
             targets are App_* variables.
Pic*         the 5 pictures cropped from your mockup (rounded corners)
StickerText  the white text sticker (StickerText variable)
Layout       the loader described above

Skins that are NOT in your mockup but were requested: Calendar, System, Visualizer,
Mic, Search, Wifi. They are placed in the empty space around the spider emblem.


3. MOVING AND RESIZING
----------------------
Move:    drag any skin with the left mouse button.
         (Rainmeter right-click > Settings > "Draggable" must be on - it is by default.)
Resize:  right-click a skin > Size 50 / 75 / 100 / 125 / 150 / 200 %,  Size +10%, Size -10%.
         This writes "Size=" into that skin's own .ini and refreshes it, so each skin
         has its own size. You can also edit  Size=1  in [Variables] of any .ini by hand.
Resize everything at once:  change DisplayScale in Variables.inc (1.25 = 25% bigger),
         refresh all, then press [Re-arrange].
How scaling works: each skin starts at (0,0); every position, width and font size is
         written as (value*#S#) with  S = GlobalS * Size.
         GlobalS = min(ScreenWidth/735, ScreenHeight/478) * DisplayScale.
Z-order: the dock background should sit under the tiles. [Load all] loads it first. If a
         tile ever hides behind the bar, click the tile or reload the DockBar skin.


4. VARIABLES TO CHANGE  (@Resources\Variables.inc)
--------------------------------------------------
ScreenWidth / ScreenHeight   your real resolution in pixels. Rainmeter uses physical
                             pixels, so with Windows scaling 125% on a 1920x1080 screen
                             you still enter 1920 / 1080.
DisplayScale                 extra multiplier (default 1.0)
OffsetX / OffsetY            shift the whole layout (e.g. onto a second monitor)
City, Lat, Lon, Unit         weather. Unit = celsius or fahrenheit. UpdateSeconds = refresh.
PlayerName                   Spotify (default). Others: iTunes, AIMP, foobar2000, MusicBee...
SearchURL, SearchHint        search engine prefix
PingHost                     host used for the Connected / Offline test
WeekStart, MonthNames, DayNames   calendar language (German example is in the file)
Event1Date / Title / Time, NoEventText   text on the DayCard
Folder1-3Label / Path        desktop folders (keep the quotes)
App_Files ... App_Trash      dock launchers. Keep the quotes; arguments go inside:
                             App_Notes="C:\Program Files\Notepad++\notepad++.exe"
GpuName                      GPU counter instance filter (default *engtype_3D)
Colors / Fonts               ColAccent, ColCardTop ... FontMain, FontBold

After editing Variables.inc: Rainmeter > Refresh all.
Replace pictures: overwrite files in @Resources\Images\Pictures\ (keep the names), refresh.
The pictures are 6x upscaled crops of a 735 px screenshot, so they are soft; your own
images will look sharper.


5. HONEST LIMITS  -  what I could NOT test
------------------------------------------
I built and statically checked this on Linux; I could not run Rainmeter. The checker
(validate script) found no duplicate sections, undefined variables, missing measures,
missing styles, bad bang targets or missing images, and all .ini files are UTF-16.
But nothing has been run on a real Rainmeter. Things most likely to need a tweak:

* GPU: the UsageMonitor "GPU Engine" counter depends on your Windows/GPU driver.
  If the GPU bar stays at 0, open System.ini and switch to the commented RunCommand
  (PowerShell) fallback.
* Music: PlayerName=Spotify needs the Spotify desktop app. Browser players and the
  Windows media session are not supported by the built-in NowPlaying plugin
  (a third-party plugin such as WebNowPlaying is needed).
  Cover art and the play/pause icon depend on what your player reports.
* Wifi pill: PingPlugin option names (DestAddress, UpdateRate, TimeoutValue) follow its
  documentation but are untested. The first second may show "Connected" until the first
  ping returns.
* Search: InputText gets its position and font size as scaled formulas. If the typing box
  looks misplaced at a non-100% Size, set fixed numbers in Search.ini [mInput].
* Weather: parsed from Open-Meteo JSON with a regex; there is no weather-ALERT data
  (the mockup's "Warnstufe Orange" line), so the description shows the weather condition.
* Layout loader: !Move right after !ActivateConfig is repeated 0.7 s later. If a skin
  still sits at the wrong place, press [Re-arrange] again.
* Size +10% / -10% rely on a Calc measure inside every skin; the fixed % entries do not.
* DayCard events are text variables; there is no calendar integration.
* Not recreated: the macOS menu bar, the wallpaper, and the "free version of Widgetter"
  watermark. Use your own Spider-Man wallpaper.
* Card backgrounds are drawn as Shape meters instead of PNGs so corners stay sharp at
  every Size; no card PNGs exist for that reason.
* Icons (folder, monitor, gear, browser, leaf, trash, Wi-Fi, mic, search, play, pause,
  previous, next, mail, notes, grid, calendar, battery, music) and the weather icons
  (sun, moon, partly cloudy, cloud, rain, snow, storm, fog) are my own drawings in
  @Resources\Images (transparent PNGs). They are not copies of the macOS icons.
