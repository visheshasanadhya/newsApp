import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:news_app/AllScreen/CountryList/country_list_controller.dart';
import 'package:news_app/AllScreen/NewsGridPage/news_card.dart';
import 'package:news_app/Database/data_model.dart';
import 'package:news_app/Helper/utility.dart';

class NewsGridView extends StatefulWidget {
  final List<NewsDataModel> newslist;
  final int selctedcountryIndex;

  const NewsGridView(
      {super.key, required this.newslist, required this.selctedcountryIndex});

  @override
  State<NewsGridView> createState() => _NewsGridViewState();
}

class _NewsGridViewState extends State<NewsGridView> {
  CountryController controller = Get.put(CountryController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appbar(context),
      body: SingleChildScrollView(
        child: Column(
          children: [
            GridView.builder(
                padding: const EdgeInsets.only(
                    right: 15, left: 15, top: 15, bottom: 15),
                itemCount: widget.newslist.length,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 15,
                  crossAxisSpacing: 15,
                ),
                itemBuilder: (_, ind) {
                  var curruntObject = widget.newslist[ind];
                  return NewsCard(
                    newslist: curruntObject,
                    selctedcountryIndex: widget.selctedcountryIndex,
                    mainindex: ind,
                    notifyParent: refresh,
                  );
                }),
          ],
        ),
      ),
    );
  }

//<<<<<<<<<<<<<<<<<<<<<< App Bar >>>>>>>>>>>>>>>>>>>>>> //
  AppBar appbar(BuildContext context) {
    return AppBar(
      elevation: 0,
      backgroundColor: AppColor.bgcolor,
      centerTitle: true,
      leading: GestureDetector(
        onTap: () {
          Navigator.pop(context);
        },
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Image.asset(
            '${AssetsPath.home}backarrow.png',
          ),
        ),
      ),
      title: Text(
        'News Paper',
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
