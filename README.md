# Offline GPS Utility App 🧭

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey.svg) ![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)

**Offline GPS** is a high-performance, minimalist utility designed for travelers, trekkers, and drivers who need reliable location data without an internet connection. It leverages your device's raw GPS and barometer sensors to provide real-time updates with zero dependency on cellular networks.

---

## 🚀 Features

### 🏎️ **Precision Speedometer**
- Real-time speed tracking with **Noise Filtering** (ignores stationary drift).
- Instant toggle between **km/h** and **mph**.
- Large, high-contrast digital display for readability while driving or cycling.

### 🏔️ **Barometric Altimeter**
- Hybrid altitude calculation using **GPS Fusion**.
- Tap to switch between **Meters** and **Feet**.
- Accuracy indicator to gauge signal reliability.

### 📍 **Exact Coordinates**
- High-precision **Latitude & Longitude** display (up to 6 decimal places).
- One-tap **Copy to Clipboard** for easy sharing in emergencies.
- Signal strength status (Strong/Weak/Lost).

### 🔋 **Offline & Battery First**
- **Dark Mode UI**: OLED-black background to minimize battery drain.
- **Privacy Focused**: No tracking, no analytics, no data collected.
- **0% Internet Usage**: Works perfectly in Airplane Mode.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (Expo SDK 54)
- **Languages**: JavaScript (ES6+)
- **Sensors**: `expo-location` (GPS), `expo-sensors` (Barometer)
- **UI**: Custom StyleSheet (No external UI libraries for maximum performance)
- **Build**: EAS Build (APK/IPA)

---

## 📥 Installation

### Option 1: Development Mode (Expo Go)
1.  Clone the repository:
    ```bash
    git clone https://github.com/shrinandan1686/Offline-GPS.git
    cd Offline-GPS
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the app:
    ```bash
    npx expo start
    ```
4.  Scan the QR code with **Expo Go** (Android/iOS).

### Option 2: Production Build (APK)
To generate a standalone APK for your Android device:

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
Download the generated APK from the Expo dashboard link and install it on your phone.

---

## 📸 Screenshots

| Speedometer | Altimeter | Coordinates |
|:---:|:---:|:---:|
| Display real-time speed | Track your elevation | Precision location data |
| *[Add Screenshot]* | *[Add Screenshot]* | *[Add Screenshot]* |

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

Made with ❤️ by [Shri & Shree]
