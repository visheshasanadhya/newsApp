import 'dart:convert';

import 'package:get/get.dart';
import 'package:news_app/Database/app_data.dart';
import 'package:news_app/Database/data_model.dart';
import 'package:news_app/Helper/preferances.dart';

class CountryController extends GetxController {
  RxList<CountryDataModel> countryData = <CountryDataModel>[].obs;
  final prefs = Preference.preference;
  RxList<NewsDataModel> favouriteNewslist = <NewsDataModel>[].obs;
  @override
  void onInit() {
    super.onInit();

    creatdatabase();
    countryData.listen((p0) {
      p0.forEach((element) {
        favouriteNewslist.value.addAll(
            element.newsList!.where((element) => element.isFavourit!).toList());
      });
      favouriteNewslist.value = favouriteNewslist.value.toSet().toList();
    });
  }

  Future<void> creatdatabase() async {
    if (await prefs.getString(PreferenceKey.database) == null) {
      var list = DataBase().countryNewsList;
      var database = jsonEncode(list);
      await prefs.saveString(PreferenceKey.database, database);
    }
    var data = await prefs.getString(PreferenceKey.database);
    var jsondata = jsonDecode(data!);
    for (var country in jsondata) {
      countryData.add(CountryDataModel.fromJson(country));
    }
  }

  getfavouriteList() {}
}
