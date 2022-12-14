import React from 'react';
import Svg, { Path, Defs, Stop, G, Rect, LinearGradient, Circle } from 'react-native-svg';

export const Logo = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 58.267 58.258">
    <G id="Dispatch_-_Logo_2_" dataName="Dispatch - Logo (2)" transform="translate(0 -0.004)">
      <Path id="Path_132" dataName="Path 132" d="M29.132,0H0v24.11L12.566,36.364V12.57H29.132a16.561,16.561,0,1,1,0,33.123h-7L34.519,57.761A29.129,29.129,0,0,0,29.132,0Zm0,0" fill="#024580" />
      <Path id="Path_133" dataName="Path 133" d="M26.668,67.53H0V41.535Zm0,0" transform="translate(0 -9.267)" fill={color} />
    </G>
  </Svg>


)

export const TickIcon = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 37 37">
    <Path
      d="M297.688,76.358,304.7,83.37,301.853,85.9,295.6,79.64l-7.831,7.831L285.636,89.6l-4.4,4.4,14.354,14.355L309.95,93.995l-4.06-4.06,2.272-3.1,5.071,5.071a2.969,2.969,0,0,1,0,4.185l-15.544,15.544a2.969,2.969,0,0,1-4.186,0L277.958,96.088a2.969,2.969,0,0,1,0-4.185l5.494-5.494.673-.673V79.17a.7.7,0,0,1,.7-.7h3.137a.7.7,0,0,1,.7.7V81.2l4.845-4.845a2.968,2.968,0,0,1,4.185,0Zm12.1,5.039L295.18,94.372l-8.212-1.977,8.627,8.38,6.3-8.6,2.638-3.6,2.272-3.1,1.387-1.894Z"
      transform="translate(-277.095 -75.495)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
)

export const CloudIcon = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 164.098 109.398">
    <Path dataName="Icon ionic-md-cloud-upload" d="M133.429,48.117A51.195,51.195,0,0,0,37.706,34.442a40.971,40.971,0,0,0,4.444,81.707h88.886a34.288,34.288,0,0,0,34.187-34.187A33.769,33.769,0,0,0,133.429,48.117ZM94.114,68.287V94.269H72.234V68.287H48.987L83.174,34.1l34.187,34.187Z" transform="translate(-1.125 -6.75)" fill={color} />
  </Svg>

)

export const BgCloudIcon = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 552.895 402.831">
    <Defs>
      <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#024580" />
        <Stop offset="1" stopColor="#00396a" />
      </LinearGradient>
    </Defs>
    <G id="Group_9" dataName="Group 9" transform="translate(75.297 79.123)">
      <Rect id="Rectangle_13" dataName="Rectangle 13" width="505" height="320" transform="matrix(0.985, -0.174, 0.174, 0.985, -75.297, 8.569)" fill="url(#linear-gradient)" />
      <Path id="Icon_ionic-md-cloud-upload" dataName="Icon ionic-md-cloud-upload" d="M133.429,48.117A51.195,51.195,0,0,0,37.706,34.442a40.971,40.971,0,0,0,4.444,81.707h88.886a34.288,34.288,0,0,0,34.187-34.187A33.769,33.769,0,0,0,133.429,48.117ZM94.114,68.287V94.269H72.234V68.287H48.987L83.174,34.1l34.187,34.187Z" transform="translate(130.826 98.25)" fill={color} />
    </G>
  </Svg>

)

export const SearchIcon = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 17.122 17.126">
    <Defs>
      <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#a27ef4" />
        <Stop offset="0.261" stopColor="#8f7cf0" stopOpacity="0.686" />
        <Stop offset="0.631" stopColor="#3b74e0" stopOpacity="0.91" />
        <Stop offset="1" stopColor="#1154a3" stopOpacity="0.961" />
      </LinearGradient>
    </Defs>
    <Path id="Icon_ionic-ios-search" dataName="Icon ionic-ios-search" d="M21.421,20.38l-4.762-4.807a6.786,6.786,0,1,0-1.03,1.043l4.731,4.775a.733.733,0,0,0,1.034.027A.738.738,0,0,0,21.421,20.38ZM11.326,16.674a5.359,5.359,0,1,1,3.79-1.569A5.326,5.326,0,0,1,11.326,16.674Z" transform="translate(-4.5 -4.493)" fill="url(#linear-gradient)" />
  </Svg>
)

export const EmptyImg = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg id="Group_3" dataName="Group 3" xmlns="http://www.w3.org/2000/svg" width="271.224" height="236.108" viewBox="0 0 271.224 236.108">
    <Path id="Path_74" dataName="Path 74" d="M271.224,738.853,77.069,741.78,0,728.121H120.315Z" transform="translate(0 -505.672)" fill="#e6e6e6" />
    <Circle id="Ellipse_14" dataName="Ellipse 14" cx="31.058" cy="31.058" r="31.058" transform="translate(192.521 0)" fill="#ff6584" />
    <Path id="Path_75" dataName="Path 75" d="M335.954,777.692s.454-9.519,9.768-8.413" transform="translate(-281.011 -553.62)" fill="#3f3d56" />
    <Circle id="Ellipse_15" dataName="Ellipse 15" cx="4.661" cy="4.661" r="4.661" transform="translate(47.65 205.691)" fill="#024580" />
    <Rect id="Rectangle_37" dataName="Rectangle 37" width="1.316" height="9.21" transform="translate(51.553 218.202)" fill="#3f3d56" />
    <Path id="Path_76" dataName="Path 76" d="M838.4,783.014s.454-9.519,9.768-8.413" transform="translate(-629.955 -557.316)" fill="#3f3d56" />
    <Path id="Path_98" dataName="Path 98" d="M4.661,0A4.661,4.661,0,1,1,0,4.661,4.661,4.661,0,0,1,4.661,0Z" transform="translate(201.153 207.317)" fill="#024580" />
    <Rect id="Rectangle_38" dataName="Rectangle 38" width="1.316" height="9.21" transform="translate(205.056 219.828)" fill="#3f3d56" />
    <Path id="Path_77" dataName="Path 77" d="M911.851,788.337s.454-9.519,9.768-8.413" transform="translate(-680.965 -561.012)" fill="#3f3d56" />
    <Circle id="Ellipse_17" dataName="Ellipse 17" cx="4.661" cy="4.661" r="4.661" transform="translate(223.593 208.943)" fill="#024580" />
    <Rect id="Rectangle_39" dataName="Rectangle 39" width="1.316" height="9.21" transform="translate(227.496 221.454)" fill="#3f3d56" />
    <Path id="Path_78" dataName="Path 78" d="M456.243,762.789s.454-9.519,9.768-8.413" transform="translate(-364.55 -543.27)" fill="#3f3d56" />
    <Path id="Path_97" dataName="Path 97" d="M4.661,0A4.661,4.661,0,1,1,0,4.661,4.661,4.661,0,0,1,4.661,0Z" transform="translate(84.4 201.138)" fill="#024580" />
    <Rect id="Rectangle_40" dataName="Rectangle 40" width="1.316" height="9.21" transform="translate(88.303 213.648)" fill="#3f3d56" />
    <Path id="Path_79" dataName="Path 79" d="M229.5,768.111s.454-9.519,9.768-8.413" transform="translate(-207.082 -546.966)" fill="#3f3d56" />
    <Path id="Path_96" dataName="Path 96" d="M4.661,0A4.661,4.661,0,1,1,0,4.661,4.661,4.661,0,0,1,4.661,0Z" transform="translate(15.129 202.764)" fill="#024580" />
    <Rect id="Rectangle_41" dataName="Rectangle 41" width="1.316" height="9.21" transform="translate(19.031 215.275)" fill="#3f3d56" />
    <Circle id="Ellipse_20" dataName="Ellipse 20" cx="50.785" cy="50.785" r="50.785" transform="translate(84.336 103.035)" fill="#3f3d56" />
    <Path id="Path_80" dataName="Path 80" d="M483.23,521.9a13.439,13.439,0,0,1,20.628,0,14.937,14.937,0,1,0-20.628,0Z" transform="translate(-380.082 -364.001)" fill="#fff" />
    <Path id="Path_81" dataName="Path 81" d="M615.235,521.9a13.439,13.439,0,0,1,20.628,0,14.937,14.937,0,1,0-20.628,0Z" transform="translate(-471.758 -364.001)" fill="#fff" />
    <Circle id="Ellipse_21" dataName="Ellipse 21" cx="5.138" cy="5.138" r="5.138" transform="translate(103.229 136.868)" fill="#3f3d56" />
    <Circle id="Ellipse_22" dataName="Ellipse 22" cx="5.138" cy="5.138" r="5.138" transform="translate(143.556 136.868)" fill="#3f3d56" />
    <Circle id="Ellipse_23" dataName="Ellipse 23" cx="5.975" cy="5.975" r="5.975" transform="translate(92.551 160.541)" fill="#ff6584" />
    <Circle id="Ellipse_24" dataName="Ellipse 24" cx="5.975" cy="5.975" r="5.975" transform="translate(161.259 160.541)" fill="#ff6584" />
    <Path id="Path_82" dataName="Path 82" d="M424.757,505.926l-4.481,19.418,7.468-7.468Z" transform="translate(-291.877 -351.36)" fill="#ff6584" />
    <Path id="Path_83" dataName="Path 83" d="M472.982,682.42l-5.087-4.27.119,4.27h-1.58l-.126-4.515-6.869,4.515h-2.875l9.693-6.371-.375-13.378-.28-10.1,1.576-.043.284,10.147.375,13.366,7.6,6.383Z" transform="translate(-317.078 -453.171)" fill="#3f3d56" />
    <Path id="Path_84" dataName="Path 84" d="M394.76,682.42l-5.087-4.27.119,4.27h-1.576l-.127-4.515-6.869,4.515h-2.875l9.689-6.371-.375-13.378-.28-10.1,1.58-.043.284,10.147.371,13.366,7.6,6.383Z" transform="translate(-262.757 -453.171)" fill="#3f3d56" />
    <Path id="Path_85" dataName="Path 85" d="M563.486,375.034c-1.393,0-2.623,1.082-3.445,2.745-.724-2.5-2.246-4.239-4.024-4.239a2.708,2.708,0,0,0-.359.06c-.683-2.669-2.271-4.541-4.122-4.541-2.475,0-4.481,3.344-4.481,7.468S549.062,384,551.537,384a2.7,2.7,0,0,0,.359-.06c.683,2.669,2.271,4.541,4.122,4.541,1.393,0,2.623-1.082,3.445-2.745.724,2.5,2.246,4.239,4.024,4.239,2.475,0,4.481-3.344,4.481-7.468S565.961,375.034,563.486,375.034Z" transform="translate(-427.619 -275.734)" fill="#3f3d56" />
    <Path id="Path_86" dataName="Path 86" d="M0,0H0A14.937,14.937,0,0,1,14.937,14.937V22.4A14.937,14.937,0,0,1,0,37.342H0Z" transform="translate(87.453 173.064) rotate(180)" fill="#024580" />
    <Path id="Path_87" dataName="Path 87" d="M598.3,444.248h0a14.937,14.937,0,0,1,14.937,14.937v7.468A14.937,14.937,0,0,1,598.3,481.59h0Z" transform="translate(-415.515 -308.526)" fill="#024580" />
    <Path id="Path_88" dataName="Path 88" d="M521.449,431.271h-2.37a54.507,54.507,0,1,0-109.015,0h-2.37a56.877,56.877,0,1,1,113.754,0Z" transform="translate(-330.834 -279.439)" fill="#024580" />
    <Path id="Path_89" dataName="Path 89" d="M131.69,368Z" transform="translate(-91.457 -255.57)" fill="#3f3d56" />
    <Path id="Path_90" dataName="Path 90" d="M305.189,403.869h0l-1.113-.464-4.7-1.986-1.684-.712-.129.326h0l-2.262,5.711,6.366,2.694.033.03-.429,1.011a1.788,1.788,0,0,0-.15.292,1.4,1.4,0,0,0,.8,1.726c.536.212,1.215-.23,1.516-.989a1.6,1.6,0,0,0-.516-1.929h0l-1.113-.464-3.809-1.481,2.176-5.495-.323-.128-2.177,5.5-.471-.183,2.186-5.518.058.024,4.477,1.895.033.03-.429,1.012a1.789,1.789,0,0,0-.15.292,1.4,1.4,0,0,0,.8,1.726c.537.212,1.215-.23,1.516-.989A1.6,1.6,0,0,0,305.189,403.869Z" transform="translate(-252.779 -297.713)" fill="#3f3d56" />
    <Path id="Path_91" dataName="Path 91" d="M373.9,438.675c-2.311-1.321-1.848-4.221-1.848-4.221-.058-1.884-1.614-1.617-1.614-1.617l-.566.129a1.72,1.72,0,0,0-.842-.156l-.862.145a2.045,2.045,0,0,1,1.8,2.1l.275,1.919L365.1,434.9l.59-1.392a2.483,2.483,0,0,0,.208-.405,1.95,1.95,0,0,0-1.116-2.4c-.745-.3-1.688.32-2.105,1.374a2.217,2.217,0,0,0,.717,2.679h0l1.546.644.012-.036Zm-2.61-3.372.165,1.837a4.237,4.237,0,0,1-.772-2.813,1.779,1.779,0,0,0-.344-.985A2.087,2.087,0,0,1,371.288,435.3Z" transform="translate(-299.455 -318.497)" fill="#3f3d56" />
    <Path id="Path_92" dataName="Path 92" d="M247.363,353.58h0l-1.546-.644-6.463-2.512,1.631-1.451a2.06,2.06,0,0,1,2.816-.461l-.506-.752s-.952-1.26-2.284.073c0,0-1.648,2.43-4.237,1.81l8.842,3.742.046.042-.6,1.4a2.478,2.478,0,0,0-.208.405,1.95,1.95,0,0,0,1.116,2.4c.745.3,1.688-.32,2.105-1.374A2.217,2.217,0,0,0,247.363,353.58Z" transform="translate(-212.132 -260.565)" fill="#3f3d56" />
    <Path id="Path_93" dataName="Path 93" d="M328.676,313.462l-.6,1.4a2.483,2.483,0,0,0-.208.405,1.95,1.95,0,0,0,1.116,2.4c.745.3,1.688-.32,2.105-1.374a2.217,2.217,0,0,0-.717-2.679h0l-1.546-.644-5.29-2.056,3.023-7.632-.448-.177-3.024,7.635-.654-.254,3.035-7.664.08.034,6.218,2.632.046.042-.6,1.4a2.488,2.488,0,0,0-.208.405,1.95,1.95,0,0,0,1.116,2.4c.745.3,1.688-.32,2.105-1.374a2.217,2.217,0,0,0-.717-2.679h0l-1.546-.644-6.319-2.671h0l-.2-.087-2.339-.989-3.321,8.386,8.842,3.742ZM322.929,301.745Z" transform="translate(-269.783 -228.67)" fill="#3f3d56" />
    <Path id="Path_94" dataName="Path 94" d="M215.732,175.663v0l-2.662-1.109-11.126-4.325,2.808-2.5a3.547,3.547,0,0,1,4.847-.794l-.871-1.3s-1.638-2.169-3.931.126c0,0-2.837,4.183-7.294,3.117l15.22,6.442.08.072-1.026,2.418a4.282,4.282,0,0,0-.358.7,3.357,3.357,0,0,0,1.921,4.127c1.283.508,2.905-.551,3.624-2.365C217.675,178.486,216.982,176.213,215.732,175.663Z" transform="translate(-184.859 -133.817)" fill="#3f3d56" />
    <Path id="Path_95" dataName="Path 95" d="M222.024,275.772c-5.525-3.159-4.42-10.091-4.42-10.091-.139-4.5-3.86-3.866-3.86-3.866l-1.354.309a4.112,4.112,0,0,0-2.014-.372l-2.06.347c4.691,1.1,4.305,5.026,4.305,5.026l.657,4.588-12.29-4.958,1.411-3.327a5.94,5.94,0,0,0,.5-.969c1-2.52-.887-5.026-2.669-5.732s-4.035.765-5.033,3.284c-.984,2.485-.022,5.643,1.714,6.405v0l3.7,1.54.028-.087Zm-6.241-8.061.4,4.407a10.1,10.1,0,0,1-1.846-6.74,4.254,4.254,0,0,0-.823-2.356,4.99,4.99,0,0,1,2.274,4.69Z" transform="translate(-182.981 -197.596)" fill="#3f3d56" />
  </Svg>

)

export const EmptyGallery = ({ color = '#000000', width = 10, height = 18 }) => (
  <Svg id="Group_4" dataName="Group 4" xmlns="http://www.w3.org/2000/svg" width="275.179" height="273.522" viewBox="0 0 275.179 273.522">
    <Path id="Path_99" dataName="Path 99" d="M431.051,594.8a3.775,3.775,0,0,0-5.752-.655l-11.921-6.153.741,6.932,11.207,4.78a3.8,3.8,0,0,0,5.725-4.9Z" transform="translate(-345.849 -399.426)" fill="#ffb8b8" />
    <Path id="Path_100" dataName="Path 100" d="M384.642,555.72a1.691,1.691,0,0,1-1.377.015l-11.323-4.912a17.41,17.41,0,0,1-8.808-8.521l-5.953-12.566a5.442,5.442,0,0,1,8.6-6.675l10.464,19.414,9.662,7.3a1.7,1.7,0,0,1,.6,1.848l-.948,3.063a1.691,1.691,0,0,1-.572.83A1.674,1.674,0,0,1,384.642,555.72Z" transform="translate(-310.034 -357.557)" fill="#024580" />
    <Circle id="Ellipse_25" dataName="Ellipse 25" cx="9.221" cy="9.221" r="9.221" transform="translate(37.663 138.96)" fill="#ffb8b8" />
    <Path id="Path_101" dataName="Path 101" d="M134.832,687.372h4.6l2.189-17.753h-6.793Z" transform="translate(-84.213 -418.234)" fill="#ffb8b8" />
    <Path id="Path_102" dataName="Path 102" d="M0,0H14.465V5.589H5.589A5.589,5.589,0,0,1,0,0Z" transform="translate(64.096 273.412) rotate(179.997)" fill="#2f2e41" />
    <Path id="Path_103" dataName="Path 103" d="M94.832,687.372h4.6l2.189-17.753H94.831Z" transform="translate(-59.23 -418.234)" fill="#ffb8b8" />
    <Path id="Path_104" dataName="Path 104" d="M0,0H14.465V5.589H5.589A5.589,5.589,0,0,1,0,0Z" transform="translate(49.079 273.412) rotate(179.997)" fill="#2f2e41" />
    <Path id="Path_105" dataName="Path 105" d="M323.356,686.307a1.689,1.689,0,0,1-.4-1.336l8.058-60.436,20.02,3.4,2.137-1.282L347.643,684a1.694,1.694,0,0,1-1.538,1.488l-6.062.505a1.689,1.689,0,0,1-1.827-1.78l1.569-27.309a.188.188,0,0,0-.369-.06l-7.765,28.794a1.692,1.692,0,0,1-1.631,1.25h-5.394a1.689,1.689,0,0,1-1.271-.577Z" transform="translate(-289.362 -422.251)" fill="#2f2e41" />
    <Path id="Path_106" dataName="Path 106" d="M337.95,559.395a1.326,1.326,0,0,0-1.7-.071l-4,3.113a1.688,1.688,0,0,1-2.661-.866c-1.963-6.876-6.411-24.183-5.316-36.365a12.758,12.758,0,0,1,13.292-11.712c4.586.306,7.6,2.951,8.967,7.863,3.35,12.059,7.031,34.179,7.735,38.491a1.682,1.682,0,0,1-.8,1.723,12.367,12.367,0,0,1-6.266,1.763C344.528,563.335,341.323,562.4,337.95,559.395Z" transform="translate(-290.09 -352.88)" fill="#024580" />
    <Path id="Path_107" dataName="Path 107" d="M342.715,620.173a3.775,3.775,0,0,0-4.122-4.065l-5.583-12.2-3.695,5.912,5.868,10.677a3.8,3.8,0,0,0,7.531-.326Z" transform="translate(-293.345 -409.369)" fill="#ffb8b8" />
    <Path id="Path_108" dataName="Path 108" d="M323.119,564.441a1.691,1.691,0,0,1-1.093-.838l-5.879-10.853a17.409,17.409,0,0,1-1.672-12.141l3.07-13.561a5.442,5.442,0,0,1,10.884.053l-3.747,21.734,3.1,11.706a1.7,1.7,0,0,1-.671,1.821l-2.637,1.825a1.691,1.691,0,0,1-.963.3A1.67,1.67,0,0,1,323.119,564.441Z" transform="translate(-283.807 -357.98)" fill="#024580" />
    <Path id="Path_109" dataName="Path 109" d="M111.248,474.908l-3.379,14.266,4.88,12.013-3.379-11.638Z" transform="translate(-67.373 -296.62)" opacity="0.2" />
    <Path id="Path_110" dataName="Path 110" d="M340.289,470.863a9.183,9.183,0,0,1-8.249-5.191,10.066,10.066,0,0,1,.907-10.04,9.01,9.01,0,0,1,9.032-3.475,10.018,10.018,0,0,1,6.189-1.778,6.077,6.077,0,0,1,5.121,3.668c.81,2.117-.06,4.907-2.075,5.767a7.479,7.479,0,0,1-4.129.062,5.9,5.9,0,0,0-4.083.378c-1.2.746-1.739,2.745-.665,3.677A4,4,0,0,1,343.4,468.2,4.087,4.087,0,0,1,340.289,470.863Z" transform="translate(-294.463 -313.456)" fill="#2f2e41" />
    <Path id="Path_111" dataName="Path 111" d="M599.279,150.634h-1.5V109.509a23.8,23.8,0,0,0-23.8-23.8H486.846a23.8,23.8,0,0,0-23.8,23.8V335.124a23.8,23.8,0,0,0,23.8,23.8h87.129a23.8,23.8,0,0,0,23.8-23.8V179.907h1.5Z" transform="translate(-376.87 -85.707)" fill="#e6e6e6" />
    <Path id="Path_112" dataName="Path 112" d="M603.639,119.977V345.26a17.776,17.776,0,0,1-17.776,17.776H498.316A17.776,17.776,0,0,1,480.54,345.26V119.977A17.776,17.776,0,0,1,498.316,102.2h10.621a8.449,8.449,0,0,0,7.82,11.634h49.915a8.449,8.449,0,0,0,7.82-11.634h11.371a17.776,17.776,0,0,1,17.776,17.776Z" transform="translate(-387.797 -96.009)" fill="#fff" />
    <Path id="Path_113" dataName="Path 113" d="M610.084,432.7a4.554,4.554,0,0,0-4.277-3.007H512.023a4.542,4.542,0,0,0-4.544,4.544V506.2a4.551,4.551,0,0,0,4.544,4.544h93.784a4.55,4.55,0,0,0,4.544-4.544V434.235A4.509,4.509,0,0,0,610.084,432.7Z" transform="translate(-404.623 -300.554)" fill="#f2f2f2" />
    <Path id="Path_114" dataName="Path 114" d="M610.084,191.895a4.554,4.554,0,0,0-4.277-3.007H512.023a4.542,4.542,0,0,0-4.544,4.544V265.4a4.551,4.551,0,0,0,4.544,4.544h93.784a4.55,4.55,0,0,0,4.544-4.544V193.432A4.509,4.509,0,0,0,610.084,191.895Z" transform="translate(-404.623 -150.152)" fill="#fff" />
    <Path id="Path_115" dataName="Path 115" d="M610.084,191.895a4.554,4.554,0,0,0-4.277-3.007H512.023a4.542,4.542,0,0,0-4.544,4.544V265.4a4.551,4.551,0,0,0,4.544,4.544h93.784a4.55,4.55,0,0,0,4.544-4.544V193.432A4.509,4.509,0,0,0,610.084,191.895Zm-.267,73.506a4.015,4.015,0,0,1-4.01,4.01H512.023a4.014,4.014,0,0,1-4.009-4.009V193.432a4.014,4.014,0,0,1,4.009-4.01h93.784a4.014,4.014,0,0,1,4.01,4.009Z" transform="translate(-404.623 -150.152)" fill="#3f3d56" />
    <Path id="Path_116" dataName="Path 116" d="M616.1,212.579v50.254a1.265,1.265,0,0,1-1.264,1.265H529.522a1.065,1.065,0,0,1-.181-.014,1.264,1.264,0,0,1-1.084-1.251V212.579a1.265,1.265,0,0,1,1.264-1.265h85.31a1.265,1.265,0,0,1,1.265,1.264Z" transform="translate(-417.6 -164.159)" fill="#e6e6e6" />
    <Circle id="Ellipse_26" dataName="Ellipse 26" cx="11.1" cy="11.1" r="11.1" transform="translate(121.06 54.835)" fill="#024580" />
    <Path id="Path_117" dataName="Path 117" d="M587.323,276.686H532.871a1.111,1.111,0,0,1-.2-.016l25.753-44.609a1.8,1.8,0,0,1,3.139,0L578.844,262l.828,1.432Z" transform="translate(-420.356 -176.546)" fill="#3f3d56" />
    <Path id="Path_118" dataName="Path 118" d="M413.824,242.307H395.233l9.126-13.257.657-.955.328-.478.828,1.432Z" transform="translate(-246.857 -142.167)" opacity="0.2" style="isolation: isolate" />
    <Path id="Path_119" dataName="Path 119" d="M680.659,298.559h-47.1l9.127-13.256.657-.955,11.893-17.276a2.406,2.406,0,0,1,3.572-.214,2.135,2.135,0,0,1,.171.214Z" transform="translate(-483.373 -198.419)" fill="#3f3d56" />
    <Path id="Path_120" dataName="Path 120" d="M545.5,443.895a4.555,4.555,0,0,0-4.277-3.007H447.438a4.542,4.542,0,0,0-4.544,4.544V517.4a4.551,4.551,0,0,0,4.544,4.544h93.784a4.55,4.55,0,0,0,4.544-4.544V445.432A4.509,4.509,0,0,0,545.5,443.895Z" transform="translate(-364.284 -307.547)" fill="#fff" />
    <Path id="Path_121" dataName="Path 121" d="M545.5,443.895a4.555,4.555,0,0,0-4.277-3.007H447.438a4.542,4.542,0,0,0-4.544,4.544V517.4a4.551,4.551,0,0,0,4.544,4.544h93.784a4.55,4.55,0,0,0,4.544-4.544V445.432A4.509,4.509,0,0,0,545.5,443.895Zm-.267,73.506a4.014,4.014,0,0,1-4.01,4.009H447.438a4.014,4.014,0,0,1-4.01-4.009V445.432a4.014,4.014,0,0,1,4.01-4.009h93.784a4.014,4.014,0,0,1,4.01,4.009Z" transform="translate(-364.284 -307.547)" fill="#3f3d56" />
    <Path id="Path_122" dataName="Path 122" d="M551.511,464.579v50.254a1.265,1.265,0,0,1-1.264,1.265H464.937a1.067,1.067,0,0,1-.181-.014,1.264,1.264,0,0,1-1.084-1.251V464.579a1.265,1.265,0,0,1,1.264-1.265h85.309a1.265,1.265,0,0,1,1.265,1.264Z" transform="translate(-377.262 -321.554)" fill="#e6e6e6" />
    <Path id="Path_129" dataName="Path 129" d="M11.1,0A11.1,11.1,0,1,1,0,11.1,11.1,11.1,0,0,1,11.1,0Z" transform="translate(96.814 149.439)" fill="#024580" />
    <Path id="Path_123" dataName="Path 123" d="M522.739,528.686H468.287a1.109,1.109,0,0,1-.2-.016l25.753-44.609a1.8,1.8,0,0,1,3.139,0L514.259,514l.828,1.432Z" transform="translate(-380.017 -333.941)" fill="#3f3d56" />
    <Path id="Path_124" dataName="Path 124" d="M349.239,494.307H330.648l9.126-13.257.657-.955.328-.477.828,1.432Z" transform="translate(-206.518 -299.562)" opacity="0.2" style="isolation: isolate" />
    <Path id="Path_125" dataName="Path 125" d="M616.075,550.559h-47.1L578.1,537.3l.657-.955,11.893-17.276a2.406,2.406,0,0,1,3.572-.214,2.15,2.15,0,0,1,.171.214Z" transform="translate(-443.035 -355.814)" fill="#3f3d56" />
    <Path id="Path_126" dataName="Path 126" d="M547.817,706.183h-27.03a6.945,6.945,0,0,1,0-13.89h27.03a6.945,6.945,0,1,1,0,13.89Z" transform="translate(-408.597 -464.571)" fill="#024580" />
    <Path id="Path_127" dataName="Path 127" d="M690.9,706.183h-27.03a6.945,6.945,0,0,1,0-13.89H690.9a6.945,6.945,0,1,1,0,13.89Z" transform="translate(-497.963 -464.571)" fill="#f2f2f2" />
    <Path id="Path_128" dataName="Path 128" d="M508.3,813.044H233.875a.375.375,0,1,1,0-.751H508.3a.375.375,0,1,1,0,.751Z" transform="translate(-233.5 -539.522)" fill="#3f3d56" />
  </Svg>


)
