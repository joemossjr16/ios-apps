# Joe’s iOS Builds

KravaSigner source for locally built OpenNOW, VoidLink, ChargeLens, and Husk IPAs.

Add this source in KravaSigner:

```text
https://raw.githubusercontent.com/joemossjr16/ios-apps/main/repo.json
```

The feed follows the flat JSON format used by the CyPwn website’s KravaSigner link. Downloads are unsigned and are signed by the installer. No provisioning profiles or signing certificates are published.

## Builds

- **Husk 0.6.1 (12), iPhone and iPad** — fixes iPad touch input by using the known mouse-compatible touch path by default, restoring taps and drags; direct touchscreen remains experimental. Keeps the aspect-matched iPad panel at a bounded ~0.3-megapixel workload. First launch cold-boots Android once to create a snapshot for the virtual touchscreen/display hardware; existing Android files are retained. Requires JIT. Unsigned IPA built from [Leviidev/Husk](https://github.com/Leviidev/Husk) commit `65d0d122a139fa7ed53db6df84ed6737e3216d29`. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/husk-0.6.1-touchfix/Husk-0.6.1-build12-iPad-TouchFix.ipa) · [Release, source patch, and notes](https://github.com/joemossjr16/ios-apps/releases/tag/husk-0.6.1-touchfix).
- **ChargeLens 1.1 (2), iPhone and iPad** — live charging watts, graphs, saved sessions and CSV export. Correct device-specific sensor labels and a wider iPad landscape layout. Requires iOS/iPadOS 26+. Unsigned IPA; 26 tests passed on each simulator. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-1.1-unsigned.ipa) · [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/chargelens-1.1).
- **ChargeLens for Mac 1.0** — native SwiftUI app for the Mac’s own charging telemetry and a connected iPhone over USB, with a menu bar readout, graphs, saved sessions and CSV export. Universal Apple silicon/Intel app; requires macOS 15+. Ad-hoc signed, not notarized. 47 tests passed; Mac readings tested on real hardware. Physical USB iPhone readings still need verification. [Download Mac ZIP](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-Mac-1.0-universal.zip).
- **OpenNOW 1.1.169 (169), 120 FPS ProMotion pacing + Metal 4 VSync & controller vibration** — fixes the 60 FPS lock on iPhone ProMotion displays by restoring 120 FPS profile negotiation under Ultimate membership, adapting CADisplayLink rate range to avoid iOS QuartzCore 60Hz demotion, and ensuring 120Hz display refresh negotiation in NativeStreamNVST. Retains Metal 4 VSync presentation deadline scheduling (`drawable.present(at: presentAt)`), controller rumble diagnostics, and split touchpad. Unsigned IPA for KravaSigner. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/opennow-metal4-pacing-169/OpenNOW-iOS-Metal4-Pacing-169.ipa) · [Release](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-pacing-169)
- **VoidLink PyroWave 0.0.1 (9)** — mouse capture forwarding, visible Windows DPI setting, full-device resolution and PyroWave integration. This unsigned distribution copy has the original signing data removed; the app executable code and version are retained. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/voidlink-9)

## Home Screen game icons

Open a game’s details in OpenNOW, select its store, then tap **Add to Home Screen**. The setup page opens in your default browser and stays open while you save it. In **Safari**, tap **Share → Add to Home Screen** and confirm the game name/icon. Use Safari for this step if another browser is your default. Tap the saved icon to open the game launch page and hand off to OpenNOW. iOS may require an Open confirmation or the page’s **Open in OpenNOW** button. The game must remain available to your NVIDIA account. Launch pages run on [GitHub Pages](https://joemossjr16.github.io/ios-apps/launch/); their source is in `launch/`.

## Sources and licenses

ChargeLens has an original SwiftUI interface and local recording/history implementation. Private ABI signatures and sensor mappings were informed by [Greg Wilson’s ios-charging-monitor](https://github.com/gregsramblings/ios-charging-monitor); its MIT notice is in `licenses/ChargeLens-third-party-notices.md` and the release assets. No third-party runtime library is bundled.

OpenNOW is based on [OpenCloudGaming/OpenNOW](https://github.com/OpenCloudGaming/OpenNOW/tree/kief5555/ios), baseline `95c0f58d42eeed176edd677f604b193c85169d9e`. Its release includes the local patch and build notes. MIT and bundled WebRTC notices are in `licenses/`. Build 127 also adapts protocol modules from [OpenCloudGaming/OpenNOW-Mac](https://github.com/OpenCloudGaming/OpenNOW-Mac/tree/619abf5d831ed382efc070bc519f8c12dda714d4), with pinned OpenSSL and usrsctp static libraries. Their licenses are included in `licenses/`, the IPA and the native library archive. The release includes the cumulative source patch, library archive, reproducible builder and build notes.

Husk is based on [Leviidev/Husk](https://github.com/Leviidev/Husk), commit `65d0d122a139fa7ed53db6df84ed6737e3216d29`. It is licensed GPL-2.0-or-later; consult the upstream repository for its license and third-party notices.

VoidLink is based on [joemossjr16/VoidLink-previously-moonlight-zwm](https://github.com/joemossjr16/VoidLink-previously-moonlight-zwm), with upstream [The-Fried-Fish/VoidLink-previously-moonlight-zwm](https://github.com/The-Fried-Fish/VoidLink-previously-moonlight-zwm). Its release includes the local app source snapshot, build scripts and pinned submodule contents. See the GPL license in `licenses/` and dependency notices in the source archive. From the extracted source, run `bash BuildScripts/build-ios-local.sh` with full Xcode installed to build without signing.

## Updating this feed

Upload a new IPA as a release asset, then update its entry in `repo.json`: version, buildVersion, versionDate, downloadURL and size in bytes. Keep bundleIdentifier stable and make metadata match the IPA. The feed does not establish automatic background installation; that depends on KravaSigner. Build-number-only update detection also needs testing; increment the app marketing version for future releases if the installed signer only compares version.

The current experimental source build is [OpenNOW 1.1.169](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-pacing-169), which combines the Metal 4 VSync pacing and screen tearing fixes with controller vibration/rumble, split touchpad, and the 120 FPS ProMotion negotiation fix.

Builds 148/149 removed visible block artifacts in the tested iPhone session, but did not establish stable frame synchronization. Build 164 eliminated the redundant 2-pass intermediate render when MetalFX is ineligible. Build 165 restored tile store barriers and full alias visibility. Build 166 synchronizes drawable presentation deadlines with display refresh scanout to eliminate tearing. Build 167 verified this fix straight from clean PR #1108 source. Build 168 combined the pacing fix with the full controller rumble diagnostics and split touchpad features. Build 169 resolves the 60 FPS lock on iPhone ProMotion displays, restoring 120 FPS displayed gameplay.
