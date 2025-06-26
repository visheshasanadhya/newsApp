import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:news_app/AllScreen/CountryList/country_list_controller.dart';
import 'package:news_app/AllScreen/NewsGridPage/news_card.dart';
import 'package:news_app/Helper/utility.dart';

class FavouritScreenView extends StatefulWidget {
  const FavouritScreenView({Key? key}) : super(key: key);

  @override
  State<FavouritScreenView> createState() => _FavouritScreenViewState();
}

class _FavouritScreenViewState extends State<FavouritScreenView> {
  CountryController controller = Get.put(CountryController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.bgcolor,
      appBar: appbar(),
      body: RefreshIndicator(
        onRefresh: () async {
          setState(() {});
        },
        child: SingleChildScrollView(
          child: Obx(
            () => Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                controller.favouriteNewslist.isEmpty
                    ? Center(
                        child: Text(
                          "No Data In Favourites",
                          style: TextStyle(
                            fontSize: 18,
                            fontFamily: AppFont.semibold,
                            color: AppColor.themeblackcolor,
                          ),
                        ),
                      )
                    : GridView.builder(
                        padding: const EdgeInsets.only(
                            right: 15, left: 15, top: 15, bottom: 15),
                        itemCount: controller.favouriteNewslist.value.length,
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        gridDelegate:
                            const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 2,
                          mainAxisSpacing: 15,
                          crossAxisSpacing: 15,
                        ),
                        itemBuilder: (_, ind) {
                          var curruntObject =
                              controller.favouriteNewslist.value[ind];
                          return NewsCard(
                            newslist: curruntObject,
                            selctedcountryIndex: curruntObject.countryId!,
                            mainindex: curruntObject.newsId!,
                            notifyParent: refresh,
                          );
                        })
              ],
            ),
          ),
        ),
      ),
    );
  }

//<<<<<<<<<<<<<<< App Bar >>>>>>>>>>>>>>>>>>>>> //
  AppBar appbar() {
    return AppBar(
      elevation: 0,
      backgroundColor: AppColor.bgcolor,
      centerTitle: true,
      title: Text(
        'Favourite',
        style: TextStyle(
          color: Colors.black,
          fontFamily: AppFont.semibold,
        ),
      ),
    );
  }

  refresh() {
    setState(() {});
  }
}
