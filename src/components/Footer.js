import React from 'react'
//import {Link} from "react-router-dom"
import './Footer.css'

export default  function Footer ()  {
    return (
        <div className="footer">
          <div className="footer--wrapper">
                <div className="footer--desc">
                    <h2>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="168.000000pt" viewBox="0 0 300.000000 168.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,168.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M1811 1459 c-64 -22 -89 -42 -108 -87 -15 -36 -10 -70 20 -121 l21
-34 -28 -22 c-27 -21 -139 -71 -184 -82 -20 -5 -23 -2 -20 18 2 14 11 25 23
27 31 6 65 43 65 70 0 38 -60 92 -104 92 -46 0 -98 -45 -115 -100 -6 -22 -14
-40 -18 -40 -3 0 -16 11 -29 25 -32 34 -69 32 -104 -5 -24 -25 -35 -30 -77
-30 -27 0 -73 -6 -103 -14 -47 -12 -57 -12 -74 0 -21 15 -98 17 -151 5 -26 -7
-34 -3 -61 28 -32 36 -33 36 -122 39 -141 6 -160 -11 -203 -181 -19 -76 -20
-92 -8 -113 10 -19 10 -30 2 -43 -6 -10 -23 -64 -38 -119 -25 -93 -26 -104
-12 -131 14 -29 14 -31 -14 -60 -35 -37 -38 -80 -8 -107 20 -18 41 -19 321
-20 l300 -2 24 -28 c13 -16 23 -32 24 -36 1 -19 -90 -28 -149 -14 -26 6 -39 4
-60 -11 -33 -25 -115 -25 -150 -1 -18 13 -29 14 -43 7 -10 -5 -23 -7 -29 -3
-6 3 -57 7 -115 9 -99 2 -105 1 -129 -23 -53 -52 -16 -142 58 -142 18 0 38 5
44 11 8 8 17 8 31 0 12 -6 23 -7 26 -2 3 5 40 7 80 5 42 -2 78 1 81 6 3 5 25
7 49 4 28 -4 46 -2 50 5 5 8 16 6 34 -8 25 -18 46 -19 252 -19 209 1 227 2
247 20 18 16 25 18 43 8 13 -7 37 -9 56 -6 22 5 41 2 56 -8 19 -12 63 -14 248
-11 124 2 232 4 240 5 8 1 32 0 53 -2 46 -4 58 9 75 76 11 42 10 51 -3 66 -19
21 -19 34 0 50 8 7 19 29 25 50 5 20 23 51 40 68 53 56 32 122 -39 122 -28 0
-32 3 -26 18 4 9 16 51 26 92 10 41 25 100 34 130 11 39 14 74 9 122 l-6 66
48 21 c27 12 65 37 84 55 19 18 53 38 76 44 22 7 55 22 71 34 17 13 50 37 73
53 66 47 125 102 140 129 12 23 11 28 -5 46 -24 26 -49 25 -111 -4 -28 -13
-84 -29 -125 -36 -49 -8 -99 -26 -148 -51 -54 -28 -87 -39 -120 -39 -25 -1
-63 -7 -84 -14 -44 -16 -47 -13 -91 86 -23 51 -49 79 -73 77 -4 0 -32 -9 -62
-20z m105 -81 c8 -14 14 -33 14 -42 0 -9 6 -19 13 -21 7 -3 12 -24 12 -51 0
-38 -3 -46 -21 -50 -14 -4 -24 -16 -27 -32 -7 -36 0 -40 13 -11 12 24 67 70
124 101 19 11 53 18 86 18 41 0 65 7 95 25 69 42 97 53 187 68 52 9 99 24 117
36 33 24 91 39 91 24 0 -5 -16 -18 -35 -29 -21 -11 -30 -21 -23 -25 6 -4 -7
-16 -33 -29 -24 -13 -62 -39 -85 -60 -37 -34 -93 -61 -154 -74 -14 -3 -33 -18
-43 -35 -19 -32 -89 -71 -128 -71 l-25 0 9 -90 c8 -82 7 -96 -16 -172 -14 -46
-29 -104 -32 -130 -5 -42 -9 -47 -36 -53 -17 -4 -32 -5 -34 -3 -2 1 3 35 11
73 7 39 13 94 14 124 l0 54 38 -6 c35 -6 36 -5 17 9 -11 8 -30 12 -42 9 -17
-4 -23 0 -28 24 -6 30 -63 126 -70 119 -2 -2 12 -35 31 -73 l35 -70 -28 -3
c-33 -4 -47 -14 -75 -56 -20 -29 -19 -29 18 7 22 20 50 37 62 37 20 0 22 -5
22 -56 0 -30 -5 -87 -12 -126 l-11 -70 -41 6 c-23 4 -57 11 -77 16 l-37 10 14
40 14 40 -64 63 c-36 35 -68 75 -71 89 l-7 27 -31 -20 c-28 -16 -51 -19 -169
-19 -130 0 -138 1 -152 22 -22 31 -20 76 5 123 50 93 69 136 69 153 0 19 34
55 61 64 23 9 76 -18 84 -41 10 -33 -3 -44 -46 -38 -45 6 -50 -3 -55 -91 -1
-30 -7 -59 -13 -65 -22 -22 -10 -27 17 -7 15 11 46 23 67 27 22 3 53 17 68 30
16 12 41 23 57 23 15 0 34 7 41 16 24 29 52 33 92 12 21 -10 44 -17 50 -15 7
2 -5 10 -26 18 -34 12 -37 16 -31 41 4 22 -2 40 -25 75 -54 81 -35 125 64 153
25 7 48 17 52 23 4 6 11 0 16 -14 5 -13 15 -36 23 -51z m-1181 -208 c15 -17
16 -25 6 -67 -16 -64 -23 -74 -60 -81 l-31 -7 26 -38 c14 -21 24 -40 22 -41
-1 -2 -19 -1 -38 1 -29 4 -40 12 -58 44 -14 25 -30 39 -43 39 -20 0 -23 -4
-33 -51 -5 -21 -13 -28 -38 -32 -18 -2 -34 -4 -36 -2 -8 7 61 232 75 243 10 7
50 12 103 12 73 0 90 -3 105 -20z m581 4 c-3 -9 -6 -19 -6 -24 0 -4 -15 -7
-32 -5 -18 1 -32 5 -30 9 1 3 2 13 2 21 0 11 11 15 36 15 29 0 35 -3 30 -16z
m-364 -139 l-25 -95 -73 0 c-67 0 -74 2 -94 27 -16 20 -20 36 -16 57 15 74 64
105 167 106 l66 0 -25 -95z m230 0 l-25 -95 -72 0 c-83 0 -109 18 -109 74 0
75 57 115 165 116 l66 0 -25 -95z m118 86 c0 -33 -55 -209 -70 -225 -15 -15
-110 -41 -110 -30 0 21 24 53 42 56 19 3 26 15 46 93 13 50 26 96 28 103 4 14
64 17 64 3z m-258 -221 c30 0 44 -10 52 -37 9 -27 7 -28 -30 -8 -18 10 -51 15
-89 14 -33 -1 -66 -1 -72 0 -24 2 -13 19 25 39 33 17 40 18 64 6 15 -8 37 -14
50 -14z m297 1 c32 -28 32 -30 13 -40 -27 -14 -44 -14 -66 2 -15 11 -16 17 -5
40 7 15 15 27 18 27 3 -1 21 -14 40 -29z m-659 -10 c0 -5 -4 -21 -10 -35 -9
-24 -11 -25 -81 -19 -55 5 -73 3 -80 -8 -17 -28 -9 -34 41 -31 40 3 50 1 50
-11 0 -39 -12 -47 -65 -47 l-53 0 -7 -50 c-7 -49 -8 -50 -42 -50 -28 0 -33 3
-29 18 3 9 15 57 26 105 30 132 24 126 138 130 53 1 100 4 105 5 4 1 7 -2 7
-7z m84 -13 c-9 -30 -8 -30 -42 -26 -26 3 -28 6 -21 26 6 16 16 22 39 22 28 0
31 -3 24 -22z m90 -2 c-4 -12 -9 -27 -11 -33 -3 -8 4 -13 20 -13 24 0 25 -2
16 -29 -7 -21 -15 -28 -28 -24 -23 6 -27 -1 -36 -51 -7 -37 -6 -39 14 -33 22
5 27 -7 15 -37 -7 -19 -64 -22 -82 -4 -7 7 -12 23 -12 36 0 19 31 158 44 197
2 6 18 10 35 11 28 1 31 -1 25 -20z m696 -11 c-7 -8 -19 -15 -26 -15 -8 0 -14
7 -14 15 0 10 10 15 26 15 22 0 25 -2 14 -15z m-804 -57 c-3 -13 -13 -56 -23
-95 l-17 -73 -34 0 c-26 0 -33 4 -29 14 5 14 11 32 38 139 9 33 13 37 41 37
27 0 30 -3 24 -22z m319 6 c10 -10 14 -25 11 -38 -3 -12 -11 -47 -18 -78 -12
-56 -13 -58 -45 -58 -18 0 -33 1 -33 3 0 1 7 24 15 51 22 73 20 88 -12 84 -25
-3 -28 -9 -41 -70 -15 -67 -15 -68 -47 -68 l-33 0 15 58 c8 31 19 74 24 95
l10 37 69 0 c50 0 73 -4 85 -16z m232 0 c3 -8 2 -34 -3 -57 l-9 -42 -63 -3
c-47 -2 -62 0 -62 11 0 21 22 37 52 37 15 0 28 5 28 10 0 18 -59 11 -80 -10
-44 -44 -15 -75 65 -68 45 4 55 2 50 -9 -3 -8 -5 -21 -5 -29 0 -22 -131 -19
-159 4 -41 32 -23 129 28 157 37 20 150 20 158 -1z m205 -9 c-4 -23 -8 -25
-63 -25 -33 0 -59 -4 -59 -10 0 -5 17 -10 38 -10 45 0 62 -14 62 -52 0 -50
-30 -68 -116 -68 -65 0 -75 2 -70 16 3 9 6 20 6 25 0 5 27 9 60 9 33 0 60 4
60 10 0 6 -12 10 -28 10 -63 0 -94 58 -52 100 16 16 33 20 94 20 73 0 73 0 68
-25z m200 0 c-4 -23 -8 -25 -63 -25 -67 0 -80 -17 -17 -22 36 -3 44 -7 52 -31
8 -22 6 -32 -11 -55 -18 -25 -26 -27 -97 -30 -75 -3 -82 0 -70 32 5 12 20 16
59 16 30 0 57 5 60 10 3 6 -5 10 -19 10 -51 0 -76 17 -76 51 0 55 22 69 110
69 77 0 77 0 72 -25z m73 -15 c13 -14 16 -28 11 -54 -6 -29 -10 -33 -29 -29
-49 12 -58 36 -31 78 20 30 26 31 49 5z m-1157 -102 c-3 -20 1 -42 10 -55 16
-26 21 -25 -77 -24 -35 0 -66 2 -68 5 -3 2 3 16 12 30 10 14 14 26 10 26 -4 0
-2 7 5 15 7 8 24 15 39 15 14 0 33 5 41 10 26 17 32 11 28 -22z m1138 -43 c-6
-31 -4 -35 14 -35 11 0 20 -4 20 -9 0 -25 -14 -41 -36 -41 -14 0 -24 -6 -24
-14 0 -7 -3 -28 -7 -46 -6 -31 -4 -33 16 -27 20 5 22 3 17 -16 -3 -12 -6 -25
-6 -29 0 -13 -65 -9 -78 4 -17 17 -15 47 9 149 21 90 21 89 73 98 4 0 5 -15 2
-34z m-524 -60 c-4 -23 -8 -25 -61 -25 -61 0 -85 -12 -95 -47 -9 -29 7 -37 71
-34 41 2 53 -1 53 -13 0 -39 -11 -46 -74 -46 -83 0 -106 16 -106 77 0 38 5 50
34 79 33 33 37 34 109 34 74 0 74 0 69 -25z m206 9 c5 -9 5 -34 -1 -60 l-10
-44 -59 0 c-56 0 -59 1 -56 23 2 16 11 23 33 25 46 5 55 22 13 22 -42 0 -68
-21 -68 -56 0 -28 28 -38 90 -32 41 4 47 -3 34 -36 -10 -26 -138 -22 -164 4
-38 38 -12 138 43 160 39 16 135 12 145 -6z m196 0 c20 -19 20 -14 -1 -101
-17 -73 -17 -73 -50 -73 -18 0 -33 1 -33 3 0 1 9 30 19 64 10 34 16 64 13 67
-3 3 -16 6 -28 6 -24 0 -32 -19 -50 -108 -6 -28 -10 -32 -39 -32 l-32 0 18 68
c9 37 20 79 23 95 6 26 8 27 75 27 50 0 74 -4 85 -16z m363 0 c3 -8 2 -34 -3
-57 -9 -42 -9 -42 -58 -45 -65 -4 -80 2 -66 28 7 13 21 20 40 20 17 0 30 5 30
10 0 18 -59 11 -80 -10 -42 -42 -18 -70 61 -70 55 0 56 -1 51 -25 -4 -24 -8
-25 -72 -25 -93 0 -115 19 -111 99 0 12 16 38 35 57 32 32 38 34 100 34 51 0
68 -4 73 -16z m142 -12 c-7 -20 -16 -28 -32 -28 -19 1 -24 -8 -38 -64 -15 -62
-18 -65 -48 -68 -29 -3 -32 -1 -27 17 3 12 8 29 10 39 31 123 38 132 101 132
44 0 44 0 34 -28z m-1162 -52 l-11 -40 -303 0 -303 0 9 23 c5 12 12 30 15 40
5 16 28 17 304 17 l299 0 -10 -40z m262 -134 c9 -11 6 -15 -15 -20 -32 -8 -41
-2 -24 19 15 19 24 19 39 1z m567 -1 c16 -8 27 -15 24 -15 -3 -1 -25 -3 -48
-5 -43 -3 -43 -3 -26 16 20 23 15 22 50 4z m-145 -10 c0 -5 -9 -11 -21 -13
-20 -3 -27 8 -13 22 10 9 34 3 34 -9z m-212 -4 c12 -8 13 -12 1 -25 -9 -12
-22 -15 -45 -10 -18 3 -42 1 -53 -5 -15 -8 -23 -6 -36 8 -9 9 -16 20 -16 24 0
3 26 8 58 10 31 2 62 4 67 5 6 1 16 -2 24 -7z m-1015 -37 c27 -10 18 -22 -16
-20 -30 1 -33 -2 -33 -29 0 -39 38 -49 50 -13 6 20 8 21 12 5 8 -30 -5 -47
-35 -47 -35 0 -52 16 -52 49 0 43 35 70 74 55z m59 -20 l13 -25 12 25 c6 14
17 26 23 26 6 0 2 -16 -11 -37 -12 -20 -19 -45 -17 -55 3 -12 0 -18 -10 -18
-10 0 -14 6 -10 19 2 11 -4 33 -14 50 -22 36 -23 41 -9 41 5 0 15 -12 23 -26z
m95 1 c6 -14 15 -25 20 -25 5 0 14 11 20 25 19 41 32 29 32 -30 0 -30 -4 -55
-10 -55 -5 0 -10 15 -11 33 l0 32 -16 -23 -16 -24 -13 24 c-13 23 -13 22 -14
-9 0 -18 -4 -33 -10 -33 -5 0 -10 25 -10 55 0 59 10 70 28 30z m306 19 c28
-11 18 -26 -12 -19 -33 7 -56 -13 -50 -42 2 -13 13 -18 36 -18 18 0 31 -4 29
-10 -6 -18 -48 -17 -68 1 -48 43 3 112 65 88z m81 -44 c21 -64 38 -65 33 -2
-3 44 -1 47 21 47 31 0 50 -28 34 -53 -7 -12 -8 -24 -1 -35 6 -11 5 -17 -2
-17 -6 0 -13 7 -16 15 -4 8 -10 15 -15 15 -5 0 -9 -7 -9 -15 0 -23 -41 -19
-47 5 -3 11 -11 20 -18 20 -8 0 -17 -9 -20 -20 -3 -11 -11 -20 -16 -20 -12 0
-12 1 5 41 7 19 16 42 19 52 10 26 14 21 32 -33z m157 33 c10 -9 18 -25 18
-36 0 -26 -28 -57 -52 -57 -15 0 -18 8 -18 55 0 60 15 71 52 38z m48 -38 c0
-30 -4 -55 -10 -55 -5 0 -10 25 -10 55 0 30 5 55 10 55 6 0 10 -25 10 -55z
m110 35 c24 -24 25 -38 4 -68 -17 -24 -62 -30 -82 -10 -17 17 -15 64 4 82 21
22 50 20 74 -4z m244 14 c27 -11 17 -24 -13 -18 -23 5 -32 2 -41 -16 -16 -31
4 -54 43 -46 20 4 27 2 25 -7 -7 -18 -63 -21 -78 -2 -39 46 7 111 64 89z m86
-9 c10 -12 10 -22 3 -38 -7 -15 -7 -29 -1 -40 6 -11 5 -17 -2 -17 -6 0 -13 7
-16 15 -4 8 -10 15 -15 15 -5 0 -9 -7 -9 -15 0 -8 -4 -15 -10 -15 -5 0 -10 25
-10 55 0 51 2 55 24 55 13 0 29 -7 36 -15z m119 -16 c13 -24 13 -29 -2 -53
-22 -32 -71 -36 -87 -7 -36 69 51 128 89 60z m71 16 c0 -9 -6 -12 -15 -9 -8 4
-15 1 -15 -4 0 -6 9 -14 21 -17 31 -10 23 -60 -11 -60 -17 0 -26 6 -29 20 -3
17 -1 17 12 6 9 -7 21 -10 28 -6 7 5 2 15 -16 29 -18 15 -24 27 -20 39 9 21
45 23 45 2z m70 0 c0 -9 -6 -12 -17 -9 -13 4 -12 0 5 -15 31 -27 27 -66 -8
-66 -16 0 -26 6 -28 18 -3 16 -1 17 17 5 32 -20 38 0 8 28 -22 21 -26 29 -16
40 15 18 39 18 39 -1z m80 5 c0 -5 -9 -10 -20 -10 -27 0 -25 -28 3 -33 l22 -4
-22 -8 c-13 -4 -23 -16 -23 -26 0 -11 -4 -19 -9 -19 -4 0 -9 25 -9 55 0 54 0
55 29 55 16 0 29 -4 29 -10z m30 -45 c0 -30 -4 -55 -10 -55 -5 0 -10 25 -10
55 0 30 5 55 10 55 6 0 10 -25 10 -55z m80 45 c0 -5 -7 -10 -15 -10 -11 0 -15
-12 -15 -45 0 -25 -4 -45 -10 -45 -5 0 -10 20 -10 45 0 25 -4 45 -10 45 -5 0
-10 5 -10 10 0 6 16 10 35 10 19 0 35 -4 35 -10z m-1305 -50 c0 -18 -6 -26
-23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23 -10 23 -28z m644 16
c16 -20 3 -46 -24 -46 -13 0 -26 7 -29 16 -7 19 10 44 29 44 7 0 18 -6 24 -14z"/>
<path d="M567 1123 c-4 -3 -7 -15 -7 -25 0 -15 8 -18 59 -18 55 0 59 2 63 25
5 24 4 25 -52 25 -31 0 -60 -3 -63 -7z"/>
<path d="M843 1070 c-54 -22 -49 -80 7 -80 22 0 29 6 33 28 3 15 9 35 12 45 8
19 -14 22 -52 7z"/>
<path d="M1073 1070 c-27 -11 -45 -43 -37 -64 4 -10 18 -16 39 -16 27 0 33 4
38 28 3 15 9 35 12 45 8 19 -14 22 -52 7z"/>
<path d="M1020 310 c0 -11 7 -20 15 -20 8 0 15 9 15 20 0 11 -7 20 -15 20 -8
0 -15 -9 -15 -20z"/>
<path d="M1100 294 c0 -24 4 -34 13 -32 19 7 21 54 3 61 -13 5 -16 -1 -16 -29z"/>
<path d="M1220 310 c-9 -16 -8 -25 1 -36 26 -32 84 0 62 34 -16 26 -50 27 -63
2z"/>
<path d="M1664 316 c-11 -28 1 -51 28 -54 31 -4 48 29 28 53 -16 19 -49 19
-56 1z"/>
</g>
</svg>
Raaj Fitness Center</h2>
<br/>
                    <p>Near Bus Stand, Tihra Mod, Sarkaghat Mandi (HP) </p>
                    <p id="phone">+91 980-536-4133</p>
                    </div>
                <div className="footer--links">
                  <div className="footer--title"> 
                    <h4>Contact Us</h4></div>
                    <a href= "mailto:rajivthakur187@gmail.com" className="footer--link">Gmail</a>
                    <a href="phone:+91 9805364133"  className="footer--link">Mobile</a>
                 
                </div>
            </div>
          <div className="footer--wrapper">
              <div className="footer--links">
                  <div className="footer--title">
                    <h4>Memberships</h4> </div>
                    <a href="/Features" className="footer--link">Features</a>
                    <a href="/Plans" className="footer--link">Plans</a>
                    <a href="/FAQs" className="footer--link">FAQs</a>
                 
                </div>
              <div className="footer--links">
                  <div className="footer--title">
                    <h4>Social Media</h4></div>
                    <a href="https://www.facebook.com/raajfitnesscenter?mibextid=kFxxJD" target='_blank' rel="noopener noreferrer" className="footer--link">Facebook</a>
                    <a href="https://www.instagram.com/rajiv.thakur.9047/" target='_blank' rel="noopener noreferrer" className="footer--link">Instagram</a>
                    <a href="https://www.youtube.com/@rajivthakur1588" target='_blank' rel="noopener noreferrer" className="footer--link">Youtube</a>
                   
                  
                </div>


          </div>

        </div>
    )
}

