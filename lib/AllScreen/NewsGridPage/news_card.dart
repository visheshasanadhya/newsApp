import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:news_app/AllScreen/CountryList/country_list_controller.dart';
import 'package:news_app/Database/data_model.dart';
import 'package:news_app/Helper/preferances.dart';
import 'package:news_app/Helper/utility.dart';
import 'package:url_launcher/url_launcher.dart';

class NewsCard extends StatefulWidget {
  final NewsDataModel newslist;
  final int mainindex;
  final int selctedcountryIndex;
  final Function() notifyParent;

  const NewsCard({
    super.key,
    required this.newslist,
    required this.selctedcountryIndex,
    required this.mainindex,
    required this.notifyParent,
  });

  @override
  State<NewsCard> createState() => _NewsCardState();
}

class _NewsCardState extends State<NewsCard> {
  final CountryController controller = Get.find();

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      double imageHeight = constraints.maxWidth * 0.65;
      double titleHeight = constraints.maxWidth * 0.3;

      return GestureDetector(
        onTap: () => _openNews(widget.newslist.newsUrl),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                offset: Offset(0, 3),
                blurRadius: 12,
                color: Colors.black.withOpacity(0.1),
              )
            ],
            color: Colors.white,
          ),
          clipBehavior: Clip.hardEdge,
          child: Column(
            children: [
              // Image Section
              SizedBox(
                height: imageHeight,
                width: double.infinity,
                child: Image.asset(
                  widget.newslist.newsImage ??
                      '${AssetsPath.home}placeholder.png',
                  fit: BoxFit.cover,
                ),
              ),

              // Title Section
              Container(
                height: titleHeight,
                width: double.infinity,
                padding:
                    const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                color: AppColor.containbgcolor,
                child: Center(
                  child: Text(
                    widget.newslist.newsName?.trim().isNotEmpty == true
                        ? widget.newslist.newsName!
                        : "Untitled News",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 14,
                      fontFamily: AppFont.semibold,
                      color: Colors.black,
                    ),
                    maxLines: 3,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ),
            ],
          ),
        ),
      );
    });
  }

  void _openNews(String? url) async {
    if (url == null) return;
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }
}
