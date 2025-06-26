import 'dart:async';
import 'package:flutter/material.dart';
import 'package:news_app/AllScreen/Introduction/introduction_screen.dart';
import 'package:news_app/Helper/bottomnavbar.dart';
import 'package:news_app/Helper/preferances.dart';
import 'package:news_app/Helper/utility.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(const Duration(seconds: 5), () async {
      var isIntroduction = await Preference.preference
          .getBool(key: PrefernceKey.isIntroductionScreenLoaded, defVal: false);
      if (isIntroduction == true) {
        Navigator.of(context).pushReplacement(MaterialPageRoute(
            builder: (BuildContext context) => const PersistenBottomNavBar()));
      } else {
        Navigator.of(context).pushReplacement(MaterialPageRoute(
            builder: (BuildContext context) => IntroductionScreenView()));
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.bgcolor,
      body: Center(
        child: Image.asset('${AssetsPath.intro}splash.gif'),
      ),
    );
  }
}
