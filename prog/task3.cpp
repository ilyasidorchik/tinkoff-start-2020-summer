#include <iostream>
#include <set>
#include <math.h>
#include <unordered_set>
#include <vector>
#include <utility>

using namespace std;

int main() {
  int n;
  cin » n;
  double ans = 0;
  double max_ypx = -INFINITY, max_x = -INFINITY, max_y = -INFINITY, min_x = INFINITY, min_y = INFINITY, min_ypx = INFINITY, min_ymx = INFINITY, max_ymx = -INFINITY; 
  vector<pair<double, double» points(n);
  
  for (int i = 0; i < n; i++) {
    cin » points[i].first » points[i].second;
    int x = points[i].first, y = points[i].second;

    if (x + 1 > max_x)
      max_x = x + 1;
    if (y + 1 > max_y)
      max_y = y + 1;
    if (y - 1< min_y)
      min_y = y - 1;
    if (x - 1< min_x)
      min_x = x - 1;
    if (x + y + 1 > max_ypx)
      max_ypx = x + y + 1;
    if (x + y - 1 < min_ypx)
      min_ypx = x + y - 1;
    if (y - x - 1 < min_ymx)
      min_ymx = y - x - 1;
    if (y - x + 1> max_ymx)
      max_ymx = y - x + 1;
  }

  ans += 2 * max_ypx - 2 * min_ymx - 2 * max_x - 2 * max_y + 2 * max_ymx + 2 * min_x - 2 * min_ypx + 2 * min_y + sqrt(2) * (2 * max_y - max_ymx - 2 * min_x + min_ypx - 2 * min_y + 2 * max_x + min_ymx - max_ypx);
  cout « ans;
}